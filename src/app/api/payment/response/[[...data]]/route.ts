import {
  DonationSchemaType,
  DonorSchemaType,
  FundraiserSchemaType,
} from "@/lib/types";
import { generateRandomId } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import {
  collection,
  doc,
  setDoc,
  runTransaction,
  arrayUnion,
} from "firebase/firestore";
import { database } from "@/firebaseconfig";
import Stripe from "stripe";
import { array } from "zod";

const stripe = new Stripe(
  "sk_test_51QkFxxLtx3YB8pFKxEfRtJ6lO1eTFLg8AO2yayWRSH7HKJH6JCyLaAiomwAmR3f6fLmGOFN81aIwVG8BUonVLOUZ00tPsjX1pC"
);

type sessionDataType = {
  sessionId: string;
  fundraiserId: string;
  title: string;
};

async function addDonation(
  session: Stripe.Response<Stripe.Checkout.Session>,
  sessionData: sessionDataType
) {
  const donationCollection = collection(database, "donations");
  const donationDocRef = doc(donationCollection, sessionData.fundraiserId);

  const donation: DonationSchemaType = {
    id: sessionData.sessionId,
    amount: session.amount_total || 0,
    donorId:
      session.customer_details?.email?.replace(".", ".") || generateRandomId(5),
    fundraiserID: sessionData.fundraiserId,
    title: sessionData.title,
    createdAt: String(new Date(session.created)),
    paymentMethod: session.payment_method_types?.[0] || null,
    paymentMethodDetails: session.payment_method_types,
  };

  await setDoc(
    donationDocRef,
    { [sessionData.sessionId]: donation },
    { merge: true }
  );
  await setDoc(
    doc(collection(database, "receipts"), sessionData.fundraiserId),
    { [sessionData.sessionId]: session },
    { merge: true }
  );

  return donation;
}

async function AddOrUpdateDonor(
  donation: DonationSchemaType,
  session: Stripe.Response<Stripe.Checkout.Session>
) {
  await runTransaction(database, async (transaction) => {
    const donorCollection = collection(database, "donors");
    const donorDocRef = doc(donorCollection, donation.fundraiserID);
    const donors = (await transaction.get(donorDocRef)).data();
    const formatDonorId = donation.donorId.replace(".", ".");

    if (donors && Object.keys(donors).includes(donation.donorId)) {
      const donor = donors[donation.donorId];
      const prevDonations = donor.Donations;

      console.log(donor, prevDonations);
      
      for(let el of prevDonations) {
        if(el.id === donation.id) {
          return;
        }
      }
      
      prevDonations.push(donation);
      
      donor.Donations = prevDonations 

      transaction.set(
        donorDocRef,
        {
          [formatDonorId]: donor, 
        },
        { merge: true }
      );
    } else {
      const donor: DonorSchemaType = {
        id: donation.donorId,
        name: session.customer_details?.name || "anonymous",
        email: session.customer_details?.email || "anonymous",
        phoneNumber: session.customer_details?.phone || null,
        address: String(session.customer_details?.address) || null,
        userType: "donor",
        createdAt: String(new Date(session.created)),
        updatedAt: null,
        defaultPaymentMethod: session.payment_method_types?.[0] || null,
        Donations: [donation],
      };

      transaction.set(donorDocRef, { [formatDonorId]: donor });
    }
  });
}

export async function POST(req: NextRequest) {
  const sessionData = (await req.json()) as sessionDataType;

  console.log(sessionData);

  const session = await stripe.checkout.sessions.retrieve(
    sessionData.sessionId
  );

  try {
    const donation = await addDonation(session, sessionData);
    await AddOrUpdateDonor(donation, session);

    console.log(sessionData);

    return NextResponse.json({
      status: 200,
      payment_status: session.payment_status,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ status: 500, error: e });
  }
}

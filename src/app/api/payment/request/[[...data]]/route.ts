import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51QkFxxLtx3YB8pFKxEfRtJ6lO1eTFLg8AO2yayWRSH7HKJH6JCyLaAiomwAmR3f6fLmGOFN81aIwVG8BUonVLOUZ00tPsjX1pC"
);

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: data.amount,
//     currency: "usd",
//     payment_method_types: ["card"],
//     receipt_email: "boakyes175@gmail.com",
//   });

//   console.log(paymentIntent.amount, paymentIntent.currency, paymentIntent.id,);

return await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    // phone_number_collection : "",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: data.title,
          },
          unit_amount: data.amount * 100,
        },
        quantity: 1,
      },
    ],
    success_url: `${process.env.NEXT_PUBLIC_DOMAIN}/success?session_id={CHECKOUT_SESSION_ID}&fundraiserId=${data.id}&title=${data.title}`,
    cancel_url: "https://example.com/cancel",
  }).then((session) => {
    console.log(session.url);
    return NextResponse.json({ status: 200, url: session.url });
    });

//   return NextResponse.json({ status: 200 });
}
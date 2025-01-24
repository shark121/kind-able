import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe("sk_test_51QkFxxLtx3YB8pFKxEfRtJ6lO1eTFLg8AO2yayWRSH7HKJH6JCyLaAiomwAmR3f6fLmGOFN81aIwVG8BUonVLOUZ00tPsjX1pC")



export async function POST(req: NextRequest) {
  const data = await req.json();

  console.log(data);
   
  const session = await stripe.checkout.sessions.retrieve(
    data.sessionId
  )
  
  console.log(session);


  console.log(data);
  return NextResponse.json({ status: 200, payment_status: session.payment_status });
}
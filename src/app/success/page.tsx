"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { use } from "react";
import Loading from "../loading";
import { Button } from "@/components/ui/button";

export default function SuccessPage() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buffering, setBuffering] = useState(true);

  const searchParams = useSearchParams();
  console.log(searchParams);

  useEffect(() => {
    const sessionId = searchParams.get("session_id");
    console.log(sessionId);
    fetch("/api/payment/response", {
      method: "POST",
      body: JSON.stringify({ sessionId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.payment_status === "paid") {
          setSuccess(true);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

//   setTimeout(() => {
//     setBuffering(false);
//   }, 500);

  if (loading)
    return (
      <div className="animate-pulse h-screen w-screen flex items-center justify-center">
        Verifying payment...{" "}
      </div>
    );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Success</h1>
      <p className="text-lg mt-4">Your payment was successful.</p>
      <Button className="mt-4 rounded-full " onClick={() => window.location.replace("/")}>Home</Button>
    </div>
  );
}

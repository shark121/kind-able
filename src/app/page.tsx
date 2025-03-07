// Fundraiser Screen 1
"use client";
import { useState, useEffect } from "react";
import FundraiserComponent from "../../components/ui/fundraiserComponent";
import { FundraiserSchemaType } from "@/lib/types";
import { DrawerComponent } from "../../components/blocks/drawer";
import Logo from "@/images/svg/logo";

export default function Home() {
  const [amount, setAmount] = useState<number>(0);
  const [fundraiserState, setFundraiserState] =
    useState<FundraiserSchemaType[]>();

  useEffect(() => {
    fetch("/api/data/read", {
      method: "GET",
      // body:JSON.stringify({amount}),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        console.log(res);
        return (await res.json());
      })
      .then((data) => {
        setFundraiserState(data);
        console.log(data);
      });
  }, []);

  return (
    fundraiserState && (
      <div className="w-full h-screen bg-white flex flex-col items-center">
        <div className="w-[80%] h-[20rem] flex items-center justify-center ">
          <Logo />
        </div>
        {/* <div></div> */}
        {fundraiserState.map((el) => (
          <FundraiserComponent key={el.id} fundraiser={el} />
        ))}
      </div>
    )
  );
}

// Fundraiser Screen 1
"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import CustomFundraiserInput from "../../../../components/ui/customDonationInput";
import { Button } from "../../../components/ui/button";
import OrganizationComponent from "../../../../components/ui/organizationComponent";
import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { FundraiserSchemaType } from "@/lib/types";
import { title } from "process";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";

export default function FundraiserScreen() {
  const [amount, setAmount] = useState<number>(0);
  const [fundraiser, setFundraiser] = useState<FundraiserSchemaType>();
  const [progress, setProgress] = useState<number>(0);

  const longerThanLimit = fundraiser
    ? fundraiser.description.length > 100
    : false;
  const params = useSearchParams();

  useEffect(() => {
    const id = params.get("id");
    console.log(id);
    fetch(`/api/data/read/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFundraiser(data);
        setProgress((data.raisedAmount / data.goalAmount) * 100);
        console.log(data);
      });
  }, []);

  function handleOnclick() {
    fundraiser && sessionStorage.setItem(fundraiser.id, JSON.stringify(fundraiser));
    fundraiser && fetch("/api/payment/request", {
      method: "POST",
      body: JSON.stringify({
        amount,
        id:  fundraiser.id ,
        title:  fundraiser.title ,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = data.url;
        console.log(data.url);
      });
  }

  if (!fundraiser) {
    return <div>Loading...</div>;
  }

  return (
    fundraiser && (
      <div className="px-2 bg-white flex flex-col w-screen items-center ">
        <div className="flex w-full items-center  justify-center h-10">
          <ChevronLeft className="absolute left-1 top-2" 
          onClick={() => window.history.back()}
          />
          Donate
          <div></div>
        </div>
        <OrganizationComponent />
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <div>{fundraiser.title}</div>
          <Progress value={progress} />
          <div className="w-full justify-between flex">
            <div className="w-1/2 flex justify-between flex-col">
              <div className="text-xs">Raised</div>
              <div>${fundraiser.raisedAmount}</div>
            </div>
            <div className="w-1/2 flex justify-end items-end flex-col">
              <div className="text-xs">Goal</div>
              <div>${fundraiser.goalAmount}</div>
            </div>
          </div>
        </div>
        <div className="h-[30rem] flex items-center justify-center flex-col">
          <CustomFundraiserInput amount={amount} setAmount={setAmount} />
          <div className="mt-4 h-[15rem] text-sm md:text-base text-gray-600 flex flex-col items-center justify-center">
            <ScrollArea className="h-full w-full rounded-md  p-4">
              {fundraiser.description}
            </ScrollArea>
          </div>
        </div>
        <Button className="w-[10rem]" onClick={handleOnclick}>
          Donate
        </Button>
      </div>
    )
  );
}

"use client";
import { generateRandomId } from "../../src/lib/utils";
import Image from "next/image";
import { FundraiserSchemaType } from "@/lib/types";
import { Progress } from "@/components/ui/progress"

import DonationSVG from "@/images/svg/donation";
export type TicketType = {
  tier: string;
  number: number;
  price: number;
};


export default function FundraiserComponent({ fundraiser }: { fundraiser: FundraiserSchemaType
 }) {
  function handleOnClick() {
    const fundraiserInfo = JSON.stringify(fundraiser);
    sessionStorage.setItem(`${fundraiser.id}`, fundraiserInfo);
    window.location.href = `/donate/?id=${fundraiser.id}`;
  }

  const startDateToObject = new Date(fundraiser.startDate);
  const startDateToString = startDateToObject.toDateString();
  const progresslevel = (Number(fundraiser.raisedAmount) / Number(fundraiser.goalAmount)) * 100;
  console.log(fundraiser.raisedAmount, fundraiser.goalAmount);
  console.log(progresslevel);
  

  return (
    <div
      onClick={handleOnClick}
      className="  w-[95%] text-ellipsis text-[0.9rem] cursor-pointer text-gray-700 border-b-[1px] flex items-start bg-white my-1 p-4   justify-start"
    >
      <div className="relative min-h-[5rem] w-[5rem] mr-2 rounded-xl flex items-center justify-center ">
        <DonationSVG size={60}/>
      </div>
      <div className="text-left p-0 flex flex-col gap-2 w-[65%] ">
        <div className="text-lg">
          {fundraiser.title.length > 25
            ? fundraiser.title.slice(0, 25) + "..."
            : fundraiser.title}
        </div>
        <div className="flex flex-col gap-2 text-[0.7rem]">
          <div>{fundraiser.category}</div>
          <div className="flex ">
            {/* <div className="h-[1rem] w-[1rem] hidden  items-center justify-center">
            </div>           */}
            <Progress value={progresslevel}/>
          </div>
        </div>
      </div>
    </div>
  );
}

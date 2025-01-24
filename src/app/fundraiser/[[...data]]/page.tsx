"use client";
import { useEffect, useState } from "react";
import { FundraiserSchemaType } from "@/lib/types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Comfortaa } from "next/font/google";
import Link from "next/link";


import { useRouter } from "next/navigation";
import Loading from "@/app/loading";
import { rgbToHex } from "@/lib/utils";
import {
  ArrowBigLeft,
  ArrowLeft,
  Calendar,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


async function fetchEventData(
  fundraiserId: string,
  setFundraiserState: React.Dispatch<React.SetStateAction< FundraiserSchemaType| undefined>>
) {
  console.log("getting from cache");
  await fetch(`/api/data/read/events/`, {
    method: "POST",
    body: JSON.stringify({fundraiserId}),
  })
    .then(async (response) => await response.json())
    .then((data: { data: FundraiserSchemaType }) => {
      console.log(data);
      // setEventState(data.data);

      // for (let item of data.data) {
      //   sessionStorage.setItem(String(item.eventId), JSON.stringify(item));
      // }

      sessionStorage.setItem(fundraiserId, JSON.stringify(data.data));

      setFundraiserState(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const comfortaa = Comfortaa({
  weight: ["400", "700", "300", "500"],
  subsets: ["cyrillic-ext", "greek"],
});




export default function EventItem(params: { params: { eventID: string } }) {
  const router = useRouter();
  const [eventState, setEventState] = useState<FundraiserSchemaType>();
  const [palletState, setPalletState] = useState<string>("#ffffff");
  const [shouldShowAll, setShouldShowAll] = useState<boolean>(false);
  const [longerThanLimit, setLongerThanLimit] = useState<boolean>(false);
  const eventID = params.params.eventID;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventData = sessionStorage.getItem(eventID);
    console.log(eventID, "event ID");
    console.log(eventData, "event Data/....");
    console.log(typeof eventData);

    if (!eventData) {
      console.log("event not found");
      fetchEventData(eventID, setEventState);
    } else {
      eventData && setEventState(JSON.parse(eventData));
    }
  }, []);



  if (loading) {
    return <div className="h-screen w-screen flex items-center justify-center">Fetching Fundraiser Data...</div>;
  }

  // background: linear-gradient(to right, #ff7e5f, #feb47b);

  return (
    eventState && (
      <div className="bg-gray-100 w-full min-h-screen flex flex-col justify-center items-center p-4">
        <div className="w-full h-[3rem] hidden sm:flex items-center justify-between">
          <div
            className="h-[3rem] aspect-square flex items-center justify-center "
            onClick={() => router.push("/")}
          >
            <ChevronLeft color={palletState} height={"30px"} width={"30px"} />
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl relative">
          {/* Image Section */}
          <div className="w-full h-[3rem] sm:hidden flex items-center justify-between absolute z-50 px-4">
            <button
              className="h-[2rem] aspect-square flex items-center justify-center bg-white rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg"
              onClick={() => router.back()}
            >
              <ChevronLeft color={palletState} height={"30px"} width={"30px"} />
            </button>
            <div className="h-[2rem] aspect-square flex items-center justify-center bg-white rounded-lg bg-opacity-50 backdrop-filter backdrop-blur-lg">
            </div>
          </div>
          <div className="relative w-full aspect-square">
            <img
              src={eventState.imageUrl}
              alt="Festival Image"
              className="rounded-t-lg object-cover w-full aspect-square"
            />
          </div>
          <div className="p-4 md:p-6">
            <h1 className="text-xl md:text-2xl font-bold">{eventState.name}</h1>

            {/* Rating and Date */}
            <div className="mt-4 flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex items-center space-x-2">
                <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                  <CalendarCheck
                    fill="none"
                    color="gray"
                    stroke="gray"
                    strokeWidth={"1px"}
                  />
                  {/* <p className="text-sm font-semibold">4.5</p> */}
                </div>
              </div>
            </div>

            {/* Location */}
            <div
              className="mt-4 flex w-full items-center space-x-2 cursor-pointer"
              onClick={() => router.push(`/map/${eventID}/`)}
            >
              <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="gray"
                  className="w-6 h-6 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.75c4.97-3.248 8.25-7.135 8.25-11.25A8.25 8.25 0 1 0 3.75 10.5c0 4.115 3.28 8.002 8.25 11.25z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 14.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5z"
                  />
                </svg>
              </div>
              <div className="w-[70%]">
                <p className=" text-sm md:text-base font-semibold">
                  {eventState.location}
                  {/* Gala Night Convention */}
                </p>
                <div className="text-xs text-gray-400 flex gap-1  items-center">
                  {/* {eventState.location} */}
                  View Location
                  {/* 123, Main Street, New York, USA */}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm md:text-base text-gray-600 ">
              {!shouldShowAll
                ? eventState.description.slice(0, 100)
                : eventState.description}

              {longerThanLimit && (
                <span
                  className="text-red-600 cursor-pointer"
                  onClick={() => setShouldShowAll(!shouldShowAll)}
                >
                  {shouldShowAll ? "   ... less" : "...  more"}
                </span>
              )}
            </p>
          </div>
          <div className="text-sm md:text-base font-semibold w-full h-[5rem] p-4">
            <div>Genres</div>
          </div>

          {/* Buy Ticket Button */}
          <div className="p-4 md:p-6">
            <Link href={`/event/findTicket/${eventID}/`} prefetch={false}>
              <Button
                className="w-full bg-primary text-white py-3 font-semibold text-sm md:text-base flex items-center justify-center"
                // onClick={handleOnClick}
              >
                Buy Ticket
              </Button>
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

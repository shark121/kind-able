import Image from "next/image";
import {Building2} from "lucide-react"
import BuildingIcon from "@/images/svg/building";

export default function OrganizationComponent({
  name,
  imageUrl,
}: {
  name?: string;
  imageUrl?: string;
}) {
  return (
    <div className="w-full flex h-[4rem] items-center gap-4 ">
      <div className="h-[60%] aspect-square rounded-full relative bg-gray-100 flex items-center justify-center">
        {imageUrl ? <Image src={imageUrl} layout="fill" objectFit="cover" alt="fundraiser" /> :  <BuildingIcon  size={20} />}
      </div>
      <div>{name ?? "Organization name "}</div>
    </div>
  );
}

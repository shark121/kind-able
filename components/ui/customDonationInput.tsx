import DollarSign from "@/images/svg/dollar";
import { useState } from "react";

export default function CustomFundraiserInput({
  setAmount,
  amount,
}: {
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  amount: number;
}) {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="relative p-4">
      <DollarSign />
      <input
        onChange={(e) => setAmount(Number(e.target.value))}
        // value={amount}
        defaultValue={"0.00"}
        type="number"
        className="flex w-full sm:w-[15rem]  h-[10rem] ring-0 border-0 text-center outline-none text-[5rem] "
        id="customInput"
        onFocus={(e) => setFocused(true)}
        onBlur={(e) => setFocused(false)}
      />
      <div
        className={` ${
          !focused ? "scale-x-0" : "scale-100"
        } h-[1px] ease-in-out transition-all duration-200  w-[90%] bg-gray-300`}
      ></div>
    </div>
  );
}

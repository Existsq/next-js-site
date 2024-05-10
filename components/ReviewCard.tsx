import React from "react";
import { Poppins } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface cardInfo {
  text: string;
  avatar: string;
  subtext: string;
  color: string;
}

const ReviewCard: React.FC<cardInfo> = ({ text, avatar, subtext, color }) => {
  return (
    <div
      className={`flex flex-col items-start space-y-10 size-fit bg-[#D8FFD8] rounded-2xl p-6`}
    >
      <div className={vietnam.className}>
        <p className="text-[#033BAD] font-normal text-2xl">
          &quot;{text}&quot;
        </p>
      </div>

      <div className="flex flex-row gap-4 justify-between items-center">
        <div className="min-w-[70px] min-h-[70px] bg-slate-500 rounded-full">
          {/* <Image
            src={avatar}
            alt="avatar"
            width={70}
            height={70}
            className="rounded-full"
          ></Image> */}
        </div>

        <div className={vietnam.className}>
          <p className="text-[#033BAD] font-medium text-base leading-6">
            {subtext}
          </p>
        </div>
      </div>
    </div>
  );
};

export { ReviewCard };

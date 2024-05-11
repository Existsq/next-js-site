import React from "react";
import Image from "next/image";
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
  icon: string;
  title: string;
  text: string;
}

const Card: React.FC<cardInfo> = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 size-fit py-10">
      <div className="size-16 items-center justify-center flex rounded-full bg-gradient-to-br from-[#573CFF] to-[#3777FF]">
        <Image src={icon} alt="logo" width={40} height={40} />
      </div>

      <div className={poppins.className}>
        <p className="text-[#02015A] text-xl text-center font-medium">
          {title}
        </p>
      </div>

      <div className={vietnam.className}>
        <p className="text-medium sm:text-lg text-center md:text-wrap px-0 sm:px-4 md:px-0 font-light text-[#67708C]">
          {text}
        </p>
      </div>
    </div>
  );
};

export { Card };

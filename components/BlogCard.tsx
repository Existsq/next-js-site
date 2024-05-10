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

interface blogCardInfo {
  image: string;
  title: string;
  tag: string;
}

const BlogCard: React.FC<blogCardInfo> = ({ image, title, tag }) => {
  return (
    <button className="flex flex-col justify-start items-start size-fit space-y-4 px-4">
      <div className="flex items-center justify-center size-full">
        <Image
          src={image}
          alt="sd"
          width={1024}
          height={707}
          className="flex items-center justify-center object-cover h-[320px] w-[500px] rounded-3xl bg-none"
        ></Image>
      </div>

      <div className="flex flex-col gap-2 items-start max-w-[500px]">
        <div className={vietnam.className}>
          <div className="flex justify-start items-start py-[0.42rem] px-4 bg-green-200 w-fit rounded-full">
            <p className="text-xs font-semibold text-blue-600">{tag}</p>
          </div>
        </div>

        <div className={vietnam.className}>
          <p className="text-2xl text-left w-full">{title}</p>
        </div>
      </div>
    </button>
  );
};

export { BlogCard };

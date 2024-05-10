import React from "react";
import { IoIosArrowDown } from "react-icons/io";
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

function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <button className="flex flex-row w-full justify-between items-center group gap-16 lg:gap-96 transition duration-300 px-4 py-4 rounded-2xl hover:bg-[#F3F7FB]">
        <div className={vietnam.className}>
          <p className="text-[#02015A] text-lg lg:text-xl">
            Does this app offer a free trial period?
          </p>
        </div>
        <IoIosArrowDown size={25} color="#C0C5D1" />
      </button>
      <button className="flex flex-row w-full justify-between items-center group gap-16 lg:gap-96 transition duration-300 px-4 py-4 rounded-2xl hover:bg-[#F3F7FB]">
        <div className={vietnam.className}>
          <p className="text-[#02015A] text-lg lg:text-xl">
            What payment methods do you offer?
          </p>
        </div>
        <IoIosArrowDown size={25} color="#C0C5D1" />
      </button>
      <button className="flex flex-row w-full justify-between items-center group gap-16 lg:gap-96 transition duration-300 px-4 py-4 rounded-2xl hover:bg-[#F3F7FB]">
        <div className={vietnam.className}>
          <p className="text-[#02015A] text-lg lg:text-xl">
            How much does a subscription cost?
          </p>
        </div>
        <IoIosArrowDown size={25} color="#C0C5D1" />
      </button>
      <button className="flex flex-row w-full justify-between items-center group gap-16 lg:gap-96 transition duration-300 px-4 py-4 rounded-2xl hover:bg-[#F3F7FB]">
        <div className={vietnam.className}>
          <p className="text-[#02015A] text-lg lg:text-xl">
            What is your refund policy?
          </p>
        </div>
        <IoIosArrowDown size={25} color="#C0C5D1" />
      </button>
    </div>
  );
}

export { FAQ };

"use client";
import React, { useState } from "react";
import { Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { VscMenu } from "react-icons/vsc";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <main className={vietnam.className}>
      <section className="flex justify-center items-center bg-white border-b-[1px] border-b-black/10 lg:border-none lg:bg-white/55 lg:backdrop-blur-xl">
        <div className="flex overflow-hidden max-w-[1500px] justify-between h-[74px] lg:h-[81px] items-center w-screen  px-6 lg:px-16 py-4">
          <div
            className="lg:ml-4 h-[43px] w-[150px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image src="/logo.svg" alt="logo" width={150} height={43} />
          </div>

          <div className="justify-between w-[309px] items-center text-base text-[#02015A] hidden lg:flex ml-10">
            <Link
              href="/"
              className="transition hover:text-[#573CFF] hover:duration-300"
            >
              Features
            </Link>
            <Link
              href="/"
              className="transition hover:text-[#573CFF] hover:duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/"
              className="transition hover:text-[#573CFF] hover:duration-300"
            >
              Contact
            </Link>
            <Link
              href="/"
              className="transition hover:text-[#573CFF] hover:duration-300"
            >
              Blog
            </Link>
          </div>

          <div>
            <button className="border-[1px] border-[#573CFF] h-[49px] justify-center font-base hidden lg:flex transition-all items-center text-[#573CFF] hover:text-white bg-none rounded-lg py-[0.75rem] px-4 duration-300 hover:bg-[#574CFF] gap-2 hover:gap-4">
              <p>Duplicate in Framer</p>
              <MdOutlineArrowOutward size={23} />
            </button>
          </div>

          <div className="lg:hidden">
            <button>
              <VscMenu size={30} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export { Navbar };

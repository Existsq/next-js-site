import React from "react";
import Link from "next/link";
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

function Footer() {
  return (
    <main className="xl:flex xl:justify-center xl:items-center xl:px-auto">
      <div className="hidden lg:flex lg:flex-col gap-16 lg:px-16">
        <div className="md:flex md:flex-row items-start md:justify-between xl:flex xl:justify-between md:px-0 text-md font-medium gap-20 xl:gap-40">
          <section className="flex flex-col justify-items-start items-start text-4xl font-medium gap-5">
            <div className={poppins.className}>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#573CFF]"
              >
                Product
              </Link>
            </div>
            <div className={poppins.className}>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#573CFF]"
              >
                Features
              </Link>
            </div>
            <div className={poppins.className}>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#573CFF]"
              >
                Pricing
              </Link>
            </div>
            <div className={poppins.className}>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#573CFF]"
              >
                Use case
              </Link>
            </div>
            <div className={poppins.className}>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#573CFF]"
              >
                Community
              </Link>
            </div>
          </section>

          <div className="flex flex-col gap-10 items-center">
            <div className="flex gap-20">
              <div className={vietnam.className}>
                <div className="flex flex-col items-start justify-items-start gap-2 font-normal">
                  <div className={vietnam.className}>
                    <p className="text-[#02015A] text-lg">Resources</p>
                  </div>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Blog
                  </Link>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Apps
                  </Link>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Learn
                  </Link>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Integrations
                  </Link>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Careers
                  </Link>
                </div>
              </div>
              <div className={vietnam.className}>
                <div className="flex flex-col items-start justify-items-start gap-2 font-normal">
                  <div className={vietnam.className}>
                    <p className="text-[#02015A] text-lg">Company</p>
                  </div>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Our Story
                  </Link>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Our Team
                  </Link>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Press
                  </Link>
                  <Link
                    href=""
                    className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <Image src="/logo.svg" alt="logo" width={200} height={50} />
            <div className="max-w-[300px] items-center text-center">
              <div className={vietnam.className}>
                <p className="text-[#787F98] font-light">
                  Significantly enhance your screening and recruitment
                  procedures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between items-center pb-6 text-sm font-normal text-[#787F98] opacity-70">
          <div>
            <p>Hirevision • Copyright © 2023</p>
          </div>

          <div className="flex justify-center items-center gap-2">
            <div>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#02015A]"
              >
                Terms of service
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#02015A]"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:hidden items-start justify-items-start px-6 text-md font-medium gap-10">
        <section className="flex flex-col justify-items-start items-start text-4xl font-medium gap-5">
          <div className={poppins.className}>
            <Link
              href="/"
              className="transition duration-300 hover:text-[#573CFF]"
            >
              Product
            </Link>
          </div>
          <div className={poppins.className}>
            <Link
              href="/"
              className="transition duration-300 hover:text-[#573CFF]"
            >
              Features
            </Link>
          </div>
          <div className={poppins.className}>
            <Link
              href="/"
              className="transition duration-300 hover:text-[#573CFF]"
            >
              Pricing
            </Link>
          </div>
          <div className={poppins.className}>
            <Link
              href="/"
              className="transition duration-300 hover:text-[#573CFF]"
            >
              Use case
            </Link>
          </div>
          <div className={poppins.className}>
            <Link
              href="/"
              className="transition duration-300 hover:text-[#573CFF]"
            >
              Community
            </Link>
          </div>
        </section>
        <div className={vietnam.className}>
          <div className="flex flex-col items-start justify-items-start gap-2 font-normal">
            <div className={vietnam.className}>
              <p className="text-[#02015A] text-lg">Resources</p>
            </div>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Blog
            </Link>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Apps
            </Link>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Learn
            </Link>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Integrations
            </Link>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Careers
            </Link>
          </div>
        </div>

        <div className={vietnam.className}>
          <div className="flex flex-col items-start justify-items-start gap-2 font-normal">
            <div className={vietnam.className}>
              <p className="text-[#02015A] text-lg">Company</p>
            </div>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Our Story
            </Link>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Our Team
            </Link>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Press
            </Link>
            <Link
              href=""
              className="transition duration-300 hover:text-[#02015A] text-[#9CA3BD]"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-items-start gap-3 pb-16">
          <Image src="/logo.svg" alt="logo" width={200} height={100} />
          <div>
            <div className={vietnam.className}>
              <p className="text-[#787F98] font-light">
                Significantly enhance your screening and recruitment procedures.
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between items-center gap-2 pb-6 text-sm font-normal text-center text-[#787F98] opacity-70">
          <div>
            <p>Hirevision • Copyright © 2023</p>
          </div>

          <div className="flex justify-center items-center gap-2 text-center">
            <div>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#02015A]"
              >
                Terms of service
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="transition duration-300 hover:text-[#02015A]"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export { Footer };

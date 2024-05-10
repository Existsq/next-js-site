import { Poppins } from "next/font/google";
import { Be_Vietnam_Pro } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { IoMdArrowForward } from "react-icons/io";
import { AvatarsBar } from "@/components/AvatarsBar";
import { MdOutlineArrowOutward } from "react-icons/md";
import { MovingLogos } from "@/components/MovingLogos";
import Image from "next/image";
import { Card } from "@/components/Card";
import { ReviewCard } from "@/components/ReviewCard";
import { FAQ } from "@/components/FAQ";
import { BlogCard } from "@/components/BlogCard";
import { Footer } from "@/components/Footer";

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Home() {
  return (
    <>
      <nav style={{ zIndex: 1000 }} className="sticky top-0 justify-center">
        <Navbar />
      </nav>
      <main className="scroll-smooth">
        <div className={vietnam.className}>
          <section>
            {/* <div className="lg:relative -top-[300px] -ml-[200px] items-center">
              <div className="flex items-center">
              <div className="flex top-0 blur-3xl rounded-full h-[523px] w-[523px] bg-[#F8FF36]"></div>
              <div className="flex top-0 blur-3xl -ml-20 rounded-full h-[200px] w-[200px] bg-green-500"></div>
              </div>
            </div> */}
            <section className="flex flex-col justify-between gap-8 items-center py-20 bg-[#F3F7FB]">
              <div className="flex flex-col gap-4">
                <div
                  id="top-button"
                  className=" self-center flex items-center text-sm font-base border-[1px] border-slate-300 lg:bg-[#E6E4FC] w-fit text-[#573CFF] rounded-3xl py-[0.3rem] px-[0.55rem] justify-between gap-4"
                >
                  <div className="rounded-3xl px-3 py-1 bg-[#E9F2FF]">New</div>
                  <button className="flex items-center gap-1">
                    <p>Create teams in Organisation</p>
                    <IoMdArrowForward size={16} className="mr-1" />
                  </button>
                </div>
                <div className={poppins.className}>
                  <p className="text-[#02015A] text-5xl sm:text-5xl leading-2 md:text-5xl lg:text-6xl xl:text-7xl font-medium px-10 sm:px-10 text-center tracking-tight">
                    Boost your hiring <br className="block sm:hidden"></br>{" "}
                    process <br className="hidden sm:hidden lg:block"></br> with
                    AI
                    <br className="block sm:hidden"></br> solution
                  </p>
                </div>
              </div>

              <div>
                <div className={vietnam.className}>
                  <p className="px-auto text-center text-md sm:text-lg md:text-lg lg:text-md xl:text-xl font-light text-[#4E5774]">
                    Hirevision is used by numerous businesses, institutions,{" "}
                    <br className="block sm:hidden lg:hidden xl:hidden"></br>{" "}
                    and <br className="hidden lg:hidden xl:block"></br>{" "}
                    recruiters{" "}
                    <br className="hidden sm:block md:hidden lg:hidden xl:hidden"></br>{" "}
                    to significantly{" "}
                    <br className="hidden md:block lg:hidden xl:hidden"></br>{" "}
                    enhance their{" "}
                    <br className="hidden lg:block xl:hidden"></br> screening{" "}
                    <br className="block sm:hidden xl:block"></br> and
                    recruitment procedures.
                  </p>
                </div>
              </div>

              <div className="flex flex-row justify-center items-center gap-2">
                <AvatarsBar />
                <div className={vietnam.className}>
                  <p className="text-[#9CA3BD] font-light">
                    Trusted already by 1.2k+
                  </p>
                </div>
              </div>

              <div className="flex sm:flex-row flex-col gap-4 justify-center sm:w-fit w-full items-center mt-6 px-6 lg:px-0">
                <button className="border-[1px] border-[#573CFF] h-[49px] w-full lg:w-fit px-6 justify-center font-base lg:flex transition-all items-center text-[#573CFF] hover:text-white bg-none rounded-lg py-[0.75rem] duration-300 hover:bg-[#574CFF] gap-2 hover:gap-4">
                  Learn more
                </button>
                <button className="flex flex-row flex-shrink-0 border-[1px] border-[#573CFF] h-[49px] w-full sm:w-fit justify-center font-base lg:flex transition-all items-center text-white bg-none rounded-lg py-[0.75rem] px-6 duration-300 bg-[#574CFF] gap-2 hover:gap-4">
                  Request Demo
                  <MdOutlineArrowOutward size={23} />
                </button>
              </div>
            </section>
          </section>
        </div>

        <section className="flex flex-col gap-2 lg:gap-6 items-center justify-center pt-16">
          <div className={vietnam.className}>
            <p className="text-lg lg:text-xl text-center font-light text-[#67708C]">
              Already chosen by the world leaders
            </p>
          </div>
          <div className="flex justify-center items-center max-w-screen">
            <MovingLogos />
          </div>
        </section>

        <div className={vietnam.className}>
          <div className="flex flex-col justify-center items-center py-8 lg:py-16 gap-6">
            <div className="flex justify-center items-center py-[0.42rem] px-4 bg-[#F3F7FB] rounded-full">
              <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                HOW IT WORKS
              </p>
            </div>
            <div className={poppins.className}>
              <p className="text-[#02015A] text-4xl lg:text-6xl text-center font-medium">
                Easy implementation in <br className="lg:block"></br> three easy
                steps
              </p>
            </div>
            <div>
              <div className={vietnam.className}>
                <p className="text-medium text-center font-light px-4 text-[#67708C]">
                  Cutting-edge, user-friendly AI tool and growth analytics
                  designed to boost user <br className="hidden xl:block"></br>{" "}
                  conversion, engagement, and retention.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="flex justify-center items-center">
          <div className="flex-col lg:flex lg:flex-row justify-between items-center space-y-10 lg:gap-6 py-10 px-6 lg:py-20 lg:px-40">
            <div className="flex flex-col gap-4 lg:gap-6 items-start justify-start">
              <div className={vietnam.className}>
                <div className="flex justify-start py-[0.42rem] w-fit px-4 bg-[#F3F7FB] rounded-full">
                  <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                    FEATURE
                  </p>
                </div>
              </div>
              <div className={poppins.className}>
                <p className="text-[#02015A] text-4xl lg:text-5xl font-medium leading-none lg:leading-[3.5rem]">
                  Automated Candidate Ranking
                </p>
              </div>
              <div className={vietnam.className}>
                <p className="text-lg text-start font-light text-[#67708C]">
                  Let AI analyze and rank applicants based on qualifications,
                  <br className=" hidden lg:block"></br>
                  experience, and skills, ensuring you focus on the most
                  promising
                  <br className=" hidden lg:block"></br>
                  candidates first.
                </p>
              </div>

              <div className="flex w-full">
                <button className="flex flex-row flex-shrink-0 border-[1px] border-[#573CFF] h-[49px] w-full sm:w-fit justify-center font-base lg:flex transition-all items-center text-[#573CFF] hover:bg-[#573CFF] hover:text-white bg-none rounded-lg py-[0.75rem] px-6 duration-300 gap-2 hover:gap-4">
                  Request Demo
                  <MdOutlineArrowOutward size={23} />
                </button>
              </div>
            </div>

            <div>
              <Image
                src="/section.jpg"
                alt="image"
                width={520}
                height={360}
                className="scale-75 lg:scale-100"
              ></Image>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex lg:flex-row justify-center items-center pb-4 lg:py-20">
          <div>
            <Image
              src="/section2.jpg"
              alt="image"
              width={520}
              height={360}
              className="hidden lg:block"
            ></Image>
          </div>

          <div className="flex flex-col justify-items-start gap-6 px-4 lg:px-0">
            <div className={vietnam.className}>
              <div className="flex w-fit items-center py-[0.42rem] px-4 bg-[#F3F7FB] rounded-full">
                <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                  FEATURE
                </p>
              </div>
            </div>

            <div className={poppins.className}>
              <p className="text-[#02015A] text-4xl lg:text-5xl font-medium leading-none lg:leading-[3.5rem]">
                Real-Time Applicant <br className=" hidden lg:block"></br>
                Analytics
              </p>
            </div>

            <div className={vietnam.className}>
              <p className="text-lg text-start font-light text-[#67708C]">
                Let AI analyze and rank applicants based on qualifications,
                <br className=" hidden lg:block"></br>
                experience, and skills, ensuring you focus on the most promising
                <br className=" hidden lg:block"></br>
                candidates first.
              </p>
            </div>
            <div className="flex w-full">
              <button className="flex flex-row flex-shrink-0 border-[1px] border-[#573CFF] h-[49px] w-full sm:w-fit justify-center font-base lg:flex transition-all items-center text-[#573CFF] hover:bg-[#573CFF] hover:text-white bg-none rounded-lg py-[0.75rem] px-6 duration-300 gap-2 hover:gap-4">
                Request Demo
                <MdOutlineArrowOutward size={23} />
              </button>
            </div>
          </div>

          <div>
            <Image
              src="/section2.jpg"
              alt="image"
              width={520}
              height={360}
              className="block pt-16 lg:hidden"
            ></Image>
          </div>
        </div>

        <section className="flex justify-center items-center">
          <div className="flex flex-col lg:flex lg:flex-row justify-between items-center pt-10 lg:py-20 px-4 lg:px-40">
            <div className="flex flex-col gap-6 items-start justify-start">
              <div className={vietnam.className}>
                <div className="flex justify-start py-[0.42rem] px-4 bg-[#F3F7FB] rounded-full">
                  <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                    FEATURE
                  </p>
                </div>
              </div>
              <div className={poppins.className}>
                <p className="text-[#02015A] text-4xl lg:text-5xl font-medium leading-none lg:leading-[3.5rem]">
                  Seamless Multilingual Support
                </p>
              </div>
              <div className={vietnam.className}>
                <p className="text-lg text-start font-light text-[#67708C]">
                  Let AI analyze and rank applicants based on qualifications,
                  <br className=" hidden lg:block"></br>
                  experience, and skills, ensuring you focus on the most
                  promising
                  <br className=" hidden lg:block"></br>
                  candidates first.
                </p>
              </div>
              <div className="flex w-full">
                <button className="flex flex-row flex-shrink-0 border-[1px] border-[#573CFF] h-[49px] w-full sm:w-fit justify-center font-base lg:flex transition-all items-center text-[#573CFF] hover:bg-[#573CFF] hover:text-white bg-none rounded-lg py-[0.75rem] px-6 duration-300 gap-2 hover:gap-4">
                  Request Demo
                  <MdOutlineArrowOutward size={23} />
                </button>
              </div>
            </div>

            <div>
              <Image
                src="/section3.jpg"
                alt="image"
                width={520}
                height={360}
                className="scale-75 lg:scale-100"
              ></Image>
            </div>
          </div>
        </section>

        <div className="flex flex-col gap-6 items-center justify-center py-4 lg:py-16 px-4">
          <div className={vietnam.className}>
            <div className="flex justify-start py-[0.42rem] px-4 bg-[#F3F7FB] rounded-full">
              <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                INCLUDED
              </p>
            </div>
          </div>

          <div className={poppins.className}>
            <p className="text-[#02015A] text-4xl lg:text-5xl text-center font-medium leading-none lg:leading-[3.5rem]">
              Powerful features <br className=" hidden lg:block"></br> tailored
              to your needs
            </p>
          </div>
          <div className={vietnam.className}>
            <p className="text-medium lg:text-lg text-center font-light text-[#67708C]">
              Gain valuable data-driven insights into talent markets worldwide.
            </p>
          </div>
        </div>

        <section className="flex items-center justify-center">
          <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6 px-10 text-balance md:px-40 pb-10 lg:pb-10 max-w-fit">
            <div>
              <Card
                icon="/person.svg"
                title="Find Your Perfect Fit"
                text="Empowering you to make informed hiring decisions and stay ahead of the competition."
              />
            </div>

            <div>
              <Card
                icon="/global.svg"
                title="Hire Globally with Ease"
                text="Empowering you to make informed hiring decisions and stay ahead of the competition."
              />
            </div>

            <div>
              <Card
                icon="/global.svg"
                title="Make Data-Driven Decisions"
                text="Empowering you to make informed hiring decisions and stay ahead of the competition."
              />
            </div>
            <div>
              <Card
                icon="/person.svg"
                title="Find Your Perfect Fit"
                text="Empowering you to make informed hiring decisions and stay ahead of the competition."
              />
            </div>

            <div>
              <Card
                icon="/global.svg"
                title="Hire Globally with Ease"
                text="Empowering you to make informed hiring decisions and stay ahead of the competition."
              />
            </div>

            <div>
              <Card
                icon="/global.svg"
                title="Make Data-Driven Decisions"
                text="Empowering you to make informed hiring decisions and stay ahead of the competition."
              />
            </div>
          </div>
        </section>

        <div className="flex justify-center">
          <section className="flex justify-center items-between px-4 lg:px-20 xl:px-20 pt-2 lg:pt-10 lg:pb-28 pb-2 xl:max-w-7xl">
            <div className="flex flex-col lg:flex lg:flex-row justify-center gap-10 lg:max-h-[400px] max-w-fit lg:justify-between flex-shrink-0 items-center bg-gradient-to-br from-[#573CFF] to-[#3777FF] rounded-3xl px-10 py-10 lg:px-20 xl:px-20 lg:py-16 ">
              <div className="flex flex-col justify-start gap-6 lg:pr-28 xl:pr-40">
                <div className={poppins.className}>
                  <p className="text-white text-4xl lg:text-5xl font-sm lg:font-medium leading-2 lg:leading-[3.5rem]">
                    Make a lasting impression with Hirevision
                  </p>
                </div>
                <div className={vietnam.className}>
                  <p className="text-lg font-light text-white">
                    Discover why hiring managers prefer Hirevision over the
                    competition and what makes it the easiest, most powerful
                    video interviewing platform on the market
                  </p>
                </div>
              </div>

              <div className="flex min-w-full lg:min-w-fit">
                <button className="h-[49px] flex flex-row w-full lg:w-full justify-center font-base lg:flex transition-all items-center text-[#4662FE] bg-white bg-none rounded-lg py-[0.75rem] px-4 duration-300 hover:opacity-90 gap-2 hover:gap-4">
                  <div className={vietnam.className}>
                    <p>Duplicate in Framer</p>
                  </div>
                  <MdOutlineArrowOutward size={23} />
                </button>
              </div>
            </div>
          </section>
        </div>

        <section className="hidden lg:flex flex-col justify-center items-center space-y-10 lg:pb-20">
          <div>
            <div className="flex justify-center items-center mb-4">
              <div className="flex flex-row justify-center items-center w-fit py-[0.42rem] px-4 bg-[#F3F7FB] rounded-full">
                <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                  METRICS
                </p>
              </div>
            </div>
            <div className={vietnam.className}>
              <p className="text-[#02015A] lg:text-3xl text-center font-medium leading-none lg:leading-[3.5rem]">
                Numbers speaking for themselves
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-16">
            <div className="flex flex-col justify-center gap-2 items-center">
              <div className={vietnam.className}>
                <p className="text-7xl font-medium text-[#573CFF]">75%</p>
              </div>
              <p className="text-xl text-center font-base text-[#67708C]">
                Candidate match role
              </p>
            </div>

            <div className="min-h-fit bg-gray-300 w-[1px]"></div>

            <div className="flex flex-col justify-center gap-2 items-center">
              <div className={vietnam.className}>
                <p className="text-7xl font-medium text-[#573CFF]">4,000+</p>
              </div>
              <p className="text-xl text-center font-base text-[#67708C]">
                Successful placement
              </p>
            </div>

            <div className="min-h-fit bg-gray-300 w-[1px]"></div>

            <div className="flex flex-col justify-center gap-2 items-center">
              <div className={vietnam.className}>
                <p className="text-7xl font-medium text-[#573CFF]">50+</p>
              </div>
              <p className="text-xl text-center font-normal text-[#67708C]">
                Operating countries
              </p>
            </div>
          </div>
        </section>

        <section className="lg:hidden flex flex-col justify-center items-center space-y-8 py-16">
          <div>
            <div className="flex justify-center items-center mb-4">
              <div className="flex flex-row justify-center items-center w-fit py-[0.42rem] px-4 bg-[#F3F7FB] rounded-full">
                <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                  METRICS
                </p>
              </div>
            </div>
            <div className={vietnam.className}>
              <p className="text-[#02015A] text-2xl lg:text-5xl text-center font-medium leading-none lg:leading-[3.5rem]">
                Numbers speaking for themselves
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-2 items-center">
            <div className={vietnam.className}>
              <p className="text-6xl font-medium text-[#573CFF]">75%</p>
            </div>
            <p className="text-lg lg:text-lg text-center font-base text-[#67708C]">
              Candidate match role
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2 items-center">
            <div className={vietnam.className}>
              <p className="text-6xl font-medium text-[#573CFF]">4,000+</p>
            </div>
            <p className="text-lg lg:text-lg text-center font-base text-[#67708C]">
              Successful placement
            </p>
          </div>

          <div className="flex flex-col justify-center gap-2 items-center">
            <div className={vietnam.className}>
              <p className="text-6xl font-medium text-[#573CFF]">50+</p>
            </div>
            <p className="text-lg lg:text-lg text-center font-normal text-[#67708C]">
              Operating countries
            </p>
          </div>
        </section>

        <section className="bg-gradient-to-b from-[#ECF1F7] to-white flex-col justify-center items-center space-y-8 px-10 py-10">
          <div className="mb-10 lg:mb-16">
            <div className="flex justify-center items-center mb-3">
              <div className={vietnam.className}>
                <div className="flex justify-center items-center py-[0.42rem] px-4 bg-white w-fit rounded-full">
                  <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                    TESTIMONIALS
                  </p>
                </div>
              </div>
            </div>
            <div className={vietnam.className}>
              <p className="text-[#02015A] text-4xl px-10 lg:text-5xl text-center font-medium leading-none lg:leading-[3.5rem]">
                Don&apos;t take our word for it
              </p>
            </div>
          </div>

          <div className="lg:hidden flex flex-col justify-center items-center">
            <ReviewCard
              text="We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements."
              avatar="/avatar.jpg"
              subtext="John Smith, HR Manager at ABC Tech Solutions."
              color="#ECE5FF"
            />
          </div>

          <div className="lg:hidden flex flex-col justify-center items-center">
            <ReviewCard
              text="As a fast-growing startup, we needed an efficient way to find skilled professionals from various regions. This AI tool exceeded our expectations."
              avatar="/avatar.jpg"
              subtext="Sarah Johnson, CEO of XYZ Innovations."
              color="#FBF7B8"
            />
          </div>

          <div className="lg:hidden flex flex-col justify-center items-center">
            <ReviewCard
              text="The platform's emphasis on diversity and inclusion impressed me, helping us create a more inclusive workforce."
              avatar="/avatar.jpg"
              subtext="Michael Chen, HR Director at Acme Enterprises."
              color="#D8FFD8"
            />
          </div>

          <div className="hidden lg:flex lg:flex-row lg:items-center lg:gap-2">
            <div className="flex flex-col justify-start items-center">
              <ReviewCard
                text="We struggled to find the right talent globally, but with their automated candidate ranking, we quickly identified top-notch candidates who perfectly fit our requirements."
                avatar="/avatar.jpg"
                subtext="John Smith, HR Manager at ABC Tech Solutions."
                color="#ECE5FF"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <ReviewCard
                text="As a fast-growing startup, we needed an efficient way to find skilled professionals from various regions. This AI tool exceeded our expectations."
                avatar="/avatar.jpg"
                subtext="Sarah Johnson, CEO of XYZ Innovations."
                color="#FBF7B8"
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <ReviewCard
                text="The platform's emphasis on diversity and inclusion impressed me, helping us create a more inclusive workforce."
                avatar="/avatar.jpg"
                subtext="Michael Chen, HR Director at Acme Enterprises."
                color="#D8FFD8"
              />
            </div>
          </div>
          <div className="flex justify-center items-center pt-2 lg:pt-8">
            <button className="flex flex-row flex-shrink-0 border-[1px] border-[#573CFF] h-[49px] w-fit justify-center font-base lg:flex transition-all items-center text-[#573CFF] hover:bg-[#573CFF] hover:text-white bg-none rounded-lg py-[0.75rem] px-6 duration-300 gap-2 hover:gap-4">
              More stories
              <MdOutlineArrowOutward size={23} />
            </button>
          </div>
        </section>

        <section className="flex flex-col justify-center items-center gap-10 pt-10 lg:pt-20">
          <div>
            <div className="flex justify-center items-center mb-3">
              <div className={vietnam.className}>
                <div className="flex justify-center items-center py-[0.42rem] px-4 bg-[#F3F7FB] w-fit rounded-full">
                  <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                    FAQ
                  </p>
                </div>
              </div>
            </div>
            <div className={poppins.className}>
              <p className="text-[#02015A] text-4xl px-10 lg:px-16 lg:text-6xl text-center font-medium leading-none lg:leading-[3.5rem]">
                We&apos;ve got you covered
              </p>
            </div>
          </div>

          <div>
            <FAQ />
          </div>
        </section>

        <section className="xl:px-6">
          <div>
            <div className="flex justify-center items-center mb-3 mt-20 lg:mt-28">
              <div className={vietnam.className}>
                <div className="flex justify-center items-center py-[0.42rem] px-4 bg-[#F3F7FB] w-fit rounded-full">
                  <p className="text-xs font-semibold bg-gradient-to-r from-[#6E8CFE] to-[#A060E9] inline-block text-transparent bg-clip-text">
                    BLOG
                  </p>
                </div>
              </div>
            </div>
            <div className={poppins.className}>
              <p className="text-[#02015A] text-4xl px-10 lg:text-5xl text-center font-medium leading-none lg:leading-[3.5rem]">
                From our Blog
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start xl:gap-0 gap-10 pt-8 lg:pt-16">
            <BlogCard
              title="What is CAC and how do I calculate it?"
              tag="ARTICLES"
              image="/blog1.jpg"
            />

            <BlogCard
              title="How you can use recurring revenue financing for faster growth without dilution"
              tag="CASE STUDIES"
              image="/blog3.jpg"
            />

            <BlogCard
              title="Announcing Slang.ai's $20M in funding"
              tag="FUNDING"
              image="/blog2.jpg"
            />
          </div>

          <div className="flex justify-center items-center pt-10 lg:pt-12">
            <button className="flex flex-row flex-shrink-0 border-[1px] border-[#573CFF] h-[49px] w-fit justify-center font-base lg:flex transition-all items-center text-[#573CFF] hover:bg-[#573CFF] hover:text-white bg-none rounded-lg py-[0.75rem] px-6 duration-300 gap-2 hover:gap-4">
              More stories
              <MdOutlineArrowOutward size={23} />
            </button>
          </div>
        </section>

        <div className="flex justify-center">
          <section className="flex justify-center items-between px-4 lg:px-20 xl:px-20 pt-20 pb-28 xl:max-w-7xl">
            <div className="flex flex-col lg:flex lg:flex-row justify-center gap-10 lg:max-h-[400px] max-w-fit lg:justify-between flex-shrink-0 items-center bg-gradient-to-br from-[#573CFF] to-[#3777FF] rounded-3xl px-10 py-10 lg:px-20 xl:px-20 lg:py-16 ">
              <div className="flex flex-col justify-start gap-6 lg:pr-28 xl:pr-40">
                <div className={poppins.className}>
                  <p className="text-white text-4xl lg:text-5xl font-sm lg:font-medium leading-2 lg:leading-[3.5rem]">
                    Make a lasting impression with Hirevision
                  </p>
                </div>
                <div className={vietnam.className}>
                  <p className="text-lg font-light text-white">
                    Discover why hiring managers prefer Hirevision over the
                    competition and what makes it the easiest, most powerful
                    video interviewing platform on the market
                  </p>
                </div>
              </div>

              <div className="flex min-w-full lg:min-w-fit">
                <button className="h-[49px] flex flex-row w-full lg:w-full justify-center font-base lg:flex transition-all items-center text-[#4662FE] bg-white bg-none rounded-lg py-[0.75rem] px-4 duration-300 hover:opacity-90 gap-2 hover:gap-4">
                  <div className={vietnam.className}>
                    <p>Duplicate in Framer</p>
                  </div>
                  <MdOutlineArrowOutward size={23} />
                </button>
              </div>
            </div>
          </section>
        </div>

        <section>
          <Footer />
        </section>
      </main>
    </>
  );
}

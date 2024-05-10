import React from "react";

function AvatarsBar() {
  return (
    <div className="flex items-center justify-center size-fit">
      <div>
        <div className="flex items-center rounded-full justify-center w-[2.25rem] h-[2.25rem] bg-gray-300 transition-all duration-500 hover:-translate-y-[0.4rem]">
          {/* <Image
            src="/avatar.jpg"
            alt="sds"
            width={34}
            height={34}
            className="rounded-full"
          ></Image> */}
        </div>
      </div>
      <div className="relative ml-[-0.9rem]">
        <div className="flex items-center justify-center rounded-full w-[2.25rem] h-[2.25rem] bg-gray-400 outline-[1px] transition-all duration-500 hover:-translate-y-[0.4rem]">
          {" "}
          {/* <Image
            src="/avatar.jpg"
            alt="sds"
            width={34}
            height={34}
            className="rounded-full"
          ></Image> */}
        </div>
      </div>
      <div className="relative ml-[-0.9rem]">
        <div className="flex items-center justify-center rounded-full w-[2.25rem] h-[2.25rem] bg-gray-300 outline-[1px] transition-all duration-500 hover:-translate-y-[0.4rem]">
          {" "}
          {/* <Image
            src="/avatar.jpg"
            alt="sds"
            width={34}
            height={34}
            className="rounded-full"
          ></Image> */}
        </div>
      </div>
      <div className="relative ml-[-0.9rem]">
        <div className="flex items-center justify-center rounded-full w-[2.25rem] h-[2.25rem] bg-gray-400 outline-[1px] transition-all duration-500 hover:-translate-y-[0.4rem]">
          {" "}
          {/* <Image
            src="/avatar.jpg"
            alt="sds"
            width={34}
            height={34}
            className="rounded-full"
          ></Image> */}
        </div>
      </div>
    </div>
  );
}

export { AvatarsBar };

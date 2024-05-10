import React from "react";
import Image from "next/image";

function MovingLogos() {
  return (
    <div className="flex overflow-hidden items-center [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <div className="flex max-w-screen w-screen space-x-20 animate-infinite-scroll">
        <Image src="./tesla.svg" alt="Facebook" width={150} height={0} />
        <Image src="./amazon.svg" alt="Disney" width={150} height={0} />
        <Image src="./dremel.svg" alt="Airbnb" width={150} height={0} />
        <Image src="./impronta.svg" alt="Apple" width={150} height={0} />
        <Image src="./spotify.svg" alt="Spark" width={150} height={0} />
        <Image src="./openai.svg" alt="Samsung" width={150} height={0} />
        <Image src="./tesla.svg" alt="Facebook" width={150} height={0} />
        <Image src="./amazon.svg" alt="Disney" width={150} height={0} />
        <Image src="./dremel.svg" alt="Airbnb" width={150} height={0} />
        <Image src="./impronta.svg" alt="Apple" width={150} height={0} />
        <Image src="./spotify.svg" alt="Spark" width={150} height={0} />
        <Image src="./openai.svg" alt="Samsung" width={150} height={0} />
      </div>
    </div>
  );
}

export { MovingLogos };

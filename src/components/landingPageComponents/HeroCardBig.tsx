"use client";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Power0 } from "gsap";
import Lamp from "../../temp/Lamp.jpg";
import Image from "next/image";

const HeroCardBig = () => {
  const heroCardBigRef = useRef(null);

  console.log(heroCardBigRef);

  gsap.registerPlugin(ScrollTrigger);
  // useEffect(() => {
  // gsap.to(heroCardBigRef.current, {
  //   y: -10,
  //   duration: 0.1,
  //   scrollTrigger: {
  //     trigger: heroCardBigRef.current,
  //     toggleActions: "restart none none none",
  //   },
  // });
  // }, []);

  return (
    <>
      <div className="h-[64rem] w-full m-auto bg-gradient-to-b from-neutral-600 to-black">
        <div className="max-w-[95%] w-1/2 bg-neutral-500 m-auto h-1/2 rounded-2xl">
          <div className="relative h-full w-full">
            <Image
              src={Lamp}
              alt="Blog-of-the-week-image"
              width={1200}
              height={1200}
              className="h-full w-full rounded-2xl absolute top-0"
            />
            {/* <div className="h-full w-full rounded-2xl absolute top-0 bg-red-600"></div> */}
            <div className="flex">
              <h1
                ref={heroCardBigRef}
                className="px-4 absolute top-0 bg-white w-fit text-xl rounded-br-2xl after:content-[''] after:absolute after:left-[100%] after:h-full after:rounded-tl-2xl after:shadow-heroCardBig after:w-full"
              >
                This is the reference heading.
              </h1>
              {/* <div className="px-4 absolute left-[47%] top-0 w-1/2 rounded-tl-3xl z-30">
                asd
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroCardBig;

"use client";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Power0 } from "gsap";
import Lamp from "../../temp/Lamp.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const presicav = localFont({
  src: "../../fonts/PresicavRg-Bold.ttf",
});
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
      {/* <div className="h-[64rem] w-full m-auto bg-gradient-to-b from-neutral-600 to-black flex box-border"> */}
      <div className="m-auto flex justify-center text-7xl italic font-extralight mt-8">Latest</div>
      <div className="h-[100vh] w-full m-auto bg-white flex box-border">
        <div className="max-w-[100%] w-full bg-white h-2/3 rounded-2xl basis-3/5 p-4 m-0 box-border">
          <div className="relative h-full w-3/4 bg-gray-900 box-border rounded-[15px]">
            <Image
              src={Lamp}
              alt="lamp-image"
              width={1200}
              height={1200}
              className=" absolute top-0 h-full w-full rounded-[15px] opacity-30 hover:opacity-100"
            />
            <div
              ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-xl after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 h-fit min-w-[40%] absolute top-0 m-auto"
            >
              <div
                className="flex justify-start align-bottom font-bold"
                style={presicav.style}
              >
                Why everyone is chasing clout...
              </div>
            </div>
            <div
              ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-lg after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 absolute top-7 h-fit"
            >
              <div
                className="flex justify-start font-serif font-bold align-bottom"
                style={presicav.style}
              >
                Prabhdeep singh
              </div>
            </div>
            <div
              ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-lg after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 h-fit absolute top-[3.5rem]"
            >
              <div
                className="flex justify-start align-bottom font-serif font-bold"
                style={presicav.style}
              >
                Lifestyle
              </div>
            </div>
          </div>
        </div>
        {/* <div className="basis-2/5">
          <div className="relative h-full w-ful">
            <div className=" basis-1/2 w-full bg-slate-200">asd</div>
            <div className=" basis-1/2 w-full  bg-slate-500">bcs</div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default HeroCardBig;

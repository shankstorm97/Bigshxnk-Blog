"use client";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Fira_Sans } from "next/font/google";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

import Lamp from "../../temp/Lamp.jpg";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const firaSans = Fira_Sans({
  weight: ["100", "200", "300", "400", "500", "900"],
  subsets: ["latin", "latin-ext"],
});
const presicav = localFont({
  src: "../../fonts/PresicavRg-Bold.ttf",
});
const vanillaRavioli = localFont({
  src: "../../fonts/VanillaRavioli.ttf",
});
const Bechtlers = localFont({
  src: "../../fonts/Bechtlers.otf",
});
const HeroCardBig = () => {
  const heroCardBigRef = useRef(null);
  const chasingClout = useRef(null);

  console.log(heroCardBigRef);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(heroCardBigRef.current, {
      // height: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: heroCardBigRef.current,
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <>
      {/* <div className="h-[64rem] w-full m-auto bg-gradient-to-b from-neutral-600 to-black flex box-border"> */}
      <div className="m-auto flex justify-center text-7xl italic font-extralight mt-10 w-full align-middle">
        <div className=" tracking-tight">Latest</div>
        <div className="text-sm ml-2 tracking-tighter">Category</div>
      </div>
      <div className="h-[100vh] w-full m-auto bg-white flex box-border max-w-[85%] mt-6">
        <div className="max-w-[100%] w-full bg-white h-2/3 rounded-2xl basis-3/5 p-4 m-0 box-border">
          <div className="relative h-full w-3/4 bg-gray-900 box-border rounded-[15px]">
            <Image
              src={Lamp}
              alt="lamp-image"
              width={1000}
              height={1000}
              className=" absolute top-0 h-full w-full rounded-[15px] opacity-30 hover:opacity-100"
            />
            <div
              ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-xl after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 h-fit min-w-[40%] absolute top-0 m-auto"
            >
              <div
                className="flex justify-start align-bottom tracking-tight font-black"
                style={vanillaRavioli.style}
                ref={chasingClout}
              >
                Why everyone is chasing clout...
              </div>
            </div>
            <div
              ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-lg after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 absolute top-7 h-fit"
            >
              <div
                className="flex justify-start font-serif align-bottom font-black"
                style={vanillaRavioli.style}
              >
                Prabhdeep singh
              </div>
            </div>
            <div
              ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-md after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 h-fit absolute top-[3.5rem] beforeClass"
            >
              <div
                className="flex justify-start align-bottom font-black"
                style={vanillaRavioli.style}
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

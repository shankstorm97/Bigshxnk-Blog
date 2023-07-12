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
  const staggerRef = useRef(null);
  const tagRef = useRef(null);
  const imageRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  const scaleUp = () => {
    gsap.to(chasingClout.current, {
      scale: 1.2,
      duration: 2,
    });
  };
  const scaleDown = () => {
    gsap.to(chasingClout.current, {
      scale: 1,
      duration: 2,
    });
  };
  useEffect(() => {
    gsap.to(staggerRef.current, {
      scale: 4,
      // height: "100%",
      // width: "65%",
      duration: 3,
      scrollTrigger: {
        trigger: heroCardBigRef.current,
        toggleActions: "restart none none none",
      },
    });
    gsap.to(imageRef.current, {
      x: 500,
      // height: "100%",
      width: "65%",
      duration: 0.5,
      scrollTrigger: {
        trigger: heroCardBigRef.current,
        toggleActions: "restart none none none",
      },
    });
    gsap.to(tagRef.current, {
      width: "50%",
      display: "flex",
      height: "100%",
      duration: 2.1,
      scrollTrigger: {
        trigger: heroCardBigRef.current,
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <>
      <div className="m-auto flex justify-center text-7xl italic font-extralight mt-10 w-full align-middle">
        <div className=" tracking-tight">Latest</div>
        <div className="text-sm ml-2 tracking-tighter">Category</div>
      </div>
      <div>
        <svg
          width="13"
          height="20"
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex justify-center m-auto"
          ref={staggerRef}
        >
          <path
            d="M12.5 1C4.1 3 1.33333 14.1667 1 19.5V1H12.5Z"
            stroke="black" fill="red"
          />
        </svg>
      </div>
      <div
        className="h-[100vh] w-full m-auto bg-white flex box-border max-w-[85%] mt-6 rounded-tl-2xl"
        // ref={heroCardBigRef}
      >
        <div
          className="max-w-[100%] w-full bg-white h-2/3 basis-3/5 p-4 m-0 box-border overflow-hidden border-none"
          // className="max-w-[100%] w-full bg-white h-2/3  p-4 m-0 box-border overflow-hidden border-none"
          // ref={chasingClout}
          // onMouseOver={scaleUp}
          // onMouseLeave={scaleDown}
        >
          <div
            className="relative h-[95%] w-[60%] bg-white box-border rounded-[15px] "
            // ref={staggerRef}
          >
            <Image
              src={Lamp}
              alt="lamp-image"
              width={1000}
              // ref={imageRef}
              height={1000}
              className="absolute top-0 h-full w-full rounded-[20px] hover:scale-110 duration-500 transition ease-in-out z-0"
            />
            <div className="flex justify-start align-middle pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-xl after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 h-fit min-w-[40%] absolute left-0 top-0 m-auto after:border-none z-20">
              <div
                className="flex justify-start align-bottom tracking-tight font-black"
                style={vanillaRavioli.style}
                ref={chasingClout}
              >
                Why everyone is chasing clout...
              </div>
            </div>
            <div
              // ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-lg after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 absolute top-7 h-fit  after:border-none"
              // ref={tagRef}
            >
              <div
                className="flex justify-start font-serif align-bottom font-black"
                style={vanillaRavioli.style}
              >
                Prabhdeep singh
              </div>
            </div>
            <div
              // ref={heroCardBigRef}
              className="flex justify-start align-middle z-10 pr-4 pl-4 bg-white rounded-br-[15px] w-fit text-md after:content-[''] after:absolute after:left-[100%] after:h-1/2 after:rounded-tl-2xl after:shadow-heroCardBigAfter after:w-full box-border after:z-40 h-fit absolute top-[3.5rem] beforeClass before:border-none after:border-none"
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

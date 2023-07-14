"use client";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Fira_Sans } from "next/font/google";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import anime from "animejs/lib/anime.es.js";
import KUTE from "kute.js";
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
  const staggerRef1 = useRef(null);
  const tagRef = useRef(null);
  const imageRef = useRef(null);
  const circleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  <svg
    width="10"
    height="11"
    viewBox="0 0 10 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 9V5C1 4.44772 1.44772 4 2 4H4C4.55228 4 5 3.55228 5 3V2C5 1.44772 5.44772 1 6 1H8C8.55228 1 9 1.44772 9 2V9C9 9.55229 8.55228 10 8 10H2C1.44772 10 1 9.55229 1 9Z"
      stroke="black"
    />
  </svg>;
  <svg
    width="359"
    height="359"
    viewBox="0 0 359 359"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 346V111C3 105.477 7.47715 101 13 101H170C175.523 101 180 96.5229 180 91V50C180 44.4772 184.477 40 190 40H245C250.523 40 255 35.5228 255 30V13C255 7.47715 259.477 3 265 3H268H346C351.523 3 356 7.47715 356 13V179.5V346C356 351.523 351.523 356 346 356H13C7.47715 356 3 351.523 3 346Z"
      stroke="black"
      stroke-width="5"
    />
  </svg>;

  useEffect(() => {
    // const tl = gsap.timeline();
    const timeline = anime.timeline({});
    timeline.add({
      targets: staggerRef1.current,
      d: [
        {
          value:
            "M3 346V111C3 105.477 7.47715 101 13 101H170C175.523 101 180 96.5229 180 91V50C180 44.4772 184.477 40 190 40H245C250.523 40 255 35.5228 255 30V13C255 7.47715 259.477 3 265 3H268H346C351.523 3 356 7.47715 356 13V179.5V346C356 351.523 351.523 356 346 356H13C7.47715 356 3 351.523 3 346Z",
        },
      ],
      easing: "easeOutQuad",
      duration: 1000,
      loop: true,
    });
  }, []);

  return (
    <>
      <div className="m-auto flex justify-center text-7xl italic font-extralight mt-10 w-full align-middle">
        <div className=" tracking-tight">Latest</div>
        <div className="text-sm ml-2 tracking-tighter">Category</div>
      </div>
      <div className=" h-20 bg-red-100 "></div>
      <div
        className="h-[100vh] w-full m-auto bg-white flex box-border max-w-[85%] mt-6 rounded-tl-2xl"
        ref={heroCardBigRef}
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
      </div>

      {/* svg here  */}

      <div className="relative m-auto">
        <svg
          width="359"
          height="359"
          viewBox="0 0 359 359"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 346V111C3 105.477 7.47715 101 13 101H170C175.523 101 180 96.5229 180 91V66C180 60.4772 184.477 56 190 56H245C250.523 56 255 51.5229 255 46V13C255 7.47715 259.477 3 265 3H268H346C351.523 3 356 7.47715 356 13V179.5V346C356 351.523 351.523 356 346 356H13C7.47715 356 3 351.523 3 346Z"
            className="absolute top-0 left-0 z-10"
            stroke="black"
            stroke-width="5"
            ref={staggerRef1}
          />
          <Image
            src={Lamp}
            alt=""
            // height={1000}
            // width={1000}
            className="absolute top-0 left-0 z-0 h-16 w-16"
          />
        </svg>
      </div>

      <svg
        width="1512"
        height="982"
        viewBox="0 0 1512 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="MacBook Pro 14&#34; - 1" clip-path="url(#clip0_1_2)">
          <rect width="1512" height="982" fill="white" stroke="white" />
          <g id="Ellipse 1" filter="url(#filter0_f_1_2)" ref={circleRef}>
            <circle cx="530" cy="452" r="40" fill="black" />
          </g>
          <g id="Ellipse 2" filter="url(#filter1_f_1_2)">
            <circle cx="450.5" cy="452.5" r="54.5" fill="black" />
          </g>
          <g id="Rectangle 1" style={{ mixBlendMode: "color-dodge" }}>
            <rect width="1512" height="982" fill="#D9D9D9" />
          </g>
          <g id="Rectangle 2" style={{ mixBlendMode: "color-dodge" }}>
            <rect width="1512" height="982" fill="black" />
          </g>
          <g id="Rectangle 3" style={{ mixBlendMode: "color-burn" }}>
            <rect width="1512" height="982" fill="black" />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_f_1_2"
            x="480"
            y="402"
            width="100"
            height="100"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="9"
              result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <filter
            id="filter1_f_1_2"
            x="381"
            y="383"
            width="139"
            height="139"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="7.5"
              result="effect1_foregroundBlur_1_2"
            />
          </filter>
          <clipPath id="clip0_1_2">
            <rect width="1512" height="982" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default HeroCardBig;

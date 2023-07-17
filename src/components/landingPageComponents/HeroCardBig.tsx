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
  const rectangleRef = useRef(null);
  const starRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  <svg
    width="138"
    height="164"
    viewBox="0 0 138 164"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M94 9.99999C105 17 119.833 39 124 51H137V1H1.00001V3.99999C10.2 2.39999 -1.44243e-05 11 0.999986 16L1.00003 145C-0.199975 156.6 6.00001 160 1.00001 160V163H137V114H130C122 140 105 151.5 98 154C88.5 158.5 73.5 160.5 63 159C53.4 159 48.5 150 48 145V68H84C92 68.4 98 75.5 98 80V95H137V64L98 36V45C98.4 56.6 90 63.5 85 64H48V15.5C50 8.7 56.8333 5 60 3.99999C71.2 -7.15256e-06 87.1851 5.66325 94 9.99999Z"
      stroke="black"
    />
  </svg>;

  // const KuteTl = KUTE.to(staggerRef1.current, {});

  useEffect(() => {
    // const tl = gsap.timeline();
    var tween = KUTE.fromTo(
      rectangleRef.current,
      { path: starRef.current },
      { path: rectangleRef.current }
    ).start();
    // tween();
    // const timeline = anime.timeline({});
    // timeline.add({
    //   targets: staggerRef1.current,
    //   d: [
    //     {
    //       value: "M26 29V1H14H1V18V37H3V42H15H26V35V29Z",
    //     },
    //   ],
    //   easing: "easeInQuad",
    //   duration: 2000,
    // });

    // timeline.add({
    //   targets: circleRef.current,
    //   translateX: -150,
    //   duration: 4000,
    //   easing: "easeInOutQuad",
    // });
    // timeline.add({
    //   targets: circleRef.current,
    //   translateY: -50,
    //   translateX: -25,
    //   duration: 4000,
    //   easing: "easeInQuad",
    // });
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
        <div className="max-w-[100%] w-full bg-white h-2/3 basis-3/5 p-4 m-0 box-border overflow-hidden border-none ">
          <div className="relative h-[95%] w-[60%] bg-white box-border rounded-[15px] ">
            <Image
              src={Lamp}
              alt="lamp-image"
              width={1000}
              height={1000}
              className="h-full w-full  hover:scale-110 duration-500 transition ease-in-out clipper container"
            />
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
          {" "}
          <path
            d="M3 346V111C3 105.477 7.47715 101 13 101H170C175.523 101 180 96.5229 180 91V66C180 60.4772 184.477 56 190 56H245C250.523 56 255 51.5229 255 46V13C255 7.47715 259.477 3 265 3H268H346C351.523 3 356 7.47715 356 13V179.5V346C356 351.523 351.523 356 346 356H13C7.47715 356 3 351.523 3 346Z"
            className="absolute top-0 left-0 z-10"
            stroke="black"
            stroke-width="0"
          />
        </svg>
      </div>

      <svg
        width="138"
        height="164"
        viewBox="0 0 138 164"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M94 9.99999C105 17 119.833 39 124 51H130.5L119 1H1V3.99999C10.2 2.39999 16 11 17 16V145C15.8 156.6 6 160 1 160V163H126L137 114H130C122 140 105 151.5 98 154C88.5 158.5 73.5 160.5 63 159C53.4 159 48.5 150 48 145V68H84C92 68.4 98 75.5 98 80V95H102V36H98V45C98.4 56.6 90 63.5 85 64H48V15.5C50 8.7 56.8333 5 60 3.99999C71.2 -7.15256e-06 87.1851 5.66325 94 9.99999Z"
          stroke="black"
        />
      </svg>

      {/* cup svg  */}

      <svg
        height={400}
        width={400}
        id="morph-example"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
      >
        <clipPath id="svgId">
          <path
            d="M171.956 14.8889C192.176 25.6914 219.444 59.642 227.103 78.1605H239.051L217.912 1H1V5.62962C17.9118 3.16047 28.5735 16.4321 30.4118 24.1481V223.222C28.2059 241.123 10.1912 246.37 1 246.37V251H230.779L251 175.383H238.132C223.426 215.506 192.176 233.253 179.309 237.111C161.846 244.056 134.272 247.142 114.971 244.827C97.3235 244.827 88.3162 230.938 87.3971 223.222V104.395H153.574C168.279 105.012 179.309 115.969 179.309 122.914V146.062H186.662V55.0123H179.309V68.9012C180.044 86.8025 164.603 97.4506 155.412 98.2222H87.3971V23.3765C91.0735 12.8827 103.635 7.17283 109.456 5.62962C130.044 -0.543221 159.429 8.19637 171.956 14.8889Z"
            style={{ visibility: "hidden" }}
            ref={starRef}
            stroke="black"
          />
          <path d="M501 1H1V501H501V1Z" stroke="black" ref={rectangleRef} />
        </clipPath>
      </svg>

      <svg
        width="1512"
        height="982"
        viewBox="0 0 1512 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="container"
      >
        <g
          id="MacBook Pro 14&#34; - 1"
          clip-path="url(#clip0_1_2)"
          stroke="white"
          fill="white"
        >
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

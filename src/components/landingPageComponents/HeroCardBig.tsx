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
import Carousel from "./Carousel";
import Script from "next/script";
import styles from "../../app/api/styles.module.css";

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
  const circleRef = useRef(null);
  const rectangleRef = useRef(null);
  const starRef = useRef(null);
  const blastRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    console.log(window.innerWidth);
    // const tl = gsap.timeline();
    gsap.to(blastRef.current, {
      // direction: "up",
      translateY: 112,
      duration: 1,
      rotation: 1,
    });
    // var tween = KUTE.fromTo(
    //   starRef.current,
    //   { path: rectangleRef.current },
    //   { path: starRef.current }
    // ).start();
    gsap.to(starRef.current, {
      rotate: 2000,
      duration: 100,
    });
  }, []);

  const imgArray = [
    "https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1689703400849-4befa701d0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2234&q=80",
    "https://plus.unsplash.com/premium_photo-1688045802023-60a42a082776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1689350098202-2243880001fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    "https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
  ];

  return (
    <>
      <div className="m-auto flex justify-center text-7xl italic font-extralight w-full align-middle myColor ">
        <div className=" tracking-tight">Latest</div>
        <div className="text-sm ml-2 tracking-tighter">Category</div>
      </div>
      <Carousel />

      {/* <div
        className="h-[100vh] w-full m-auto bg-white flex box-border max-w-[85%] mt-6 rounded-tl-2xl"
        ref={heroCardBigRef}
      >
        <div className="max-w-[100%] w-full h-2/3 basis-3/5 p-4 m-0 box-border overflow-hidden border-none bg-slate-600">
          <div className="relative h-[95%] w-[60%] bg-white box-border rounded-[15px] hover:scale-110 duration-500 transition ease-in-out">
            <Image
              src={Lamp}
              alt="lamp-image"
              width={1000}
              height={1000}
              className="h-full w-full   clipper container"
            />
            <h2
              className=" absolute top-12 text-red-400 text-4xl"
              style={presicav.style}
            >
              Title for this comp...
            </h2>
          </div>
        </div>
      </div> */}

      {/* svg here  */}

      {/* <svg
        width="359"
        height="359"
        viewBox="0 0 359 359"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="svgId">
          <path
            ref={starRef}
            d="M3 346V111C3 105.477 7.47715 101 13 101H170C175.523 101 180 96.5229 180 91V50C180 44.4772 184.477 40 190 40H245C250.523 40 255 35.5228 255 30V13C255 7.47715 259.477 3 265 3H268H346C351.523 3 356 7.47715 356 13V179.5V346C356 351.523 351.523 356 346 356H13C7.47715 356 3 351.523 3 346Z"
            stroke="black"
            // stroke-width="5"
            style={{ strokeWidth: 5 }}
          />
          <path
            d="M346 3H13C7.47715 3 3 7.47715 3 13V346C3 351.523 7.47715 356 13 356H346C351.523 356 356 351.523 356 346V13C356 7.47715 351.523 3 346 3Z"
            ref={rectangleRef}
            style={{ visibility: "hidden", strokeWidth: 5 }}
            stroke="black"
            // stroke-width="5"
          />
        </clipPath>
      </svg> */}

      {/* goo effect svg */}
      {/* 
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
      </svg> */}

      <div
        className=" h-[200px] w-full flex justify-center align-middle main-div bg-red-500 container mb-20"
        ref={blastRef}
      >
        {/* <div className="bg-red-100  first-div">first </div>
        <div className="bg-red-200 h-[500px] w-[500px] m-4 hover:m-8 transition-all duration-1000 hover:scale-105">
          Second{" "}
        </div>
        <div className="bg-red-300  third-div">Third</div> */}
      </div>
      <div className=" bg-white m-auto noise">
        <h6 className=" text-black">Oppeheimerm might be in trouble.</h6>
      </div>
    </>
  );
};

export default HeroCardBig;

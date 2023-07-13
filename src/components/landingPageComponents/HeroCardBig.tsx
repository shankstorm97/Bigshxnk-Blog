"use client";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Fira_Sans } from "next/font/google";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import anime from "animejs/lib/anime.es.js";

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
  // const scaleUp = () => {
  //   gsap.to(chasingClout.current, {
  //     scale: 1.2,
  //     duration: 2,
  //   });
  // };
  // const scaleDown = () => {
  //   gsap.to(chasingClout.current, {
  //     scale: 1,
  //     duration: 2,
  //   });
  // };

  // const animejsFunc = () => {
  //   const timeline = anime.timeline({
  //     // loop: true,
  //     // autoplay: false,
  //     duration: 2000,
  //     easing: "easeInOutExpo",
  //   });
  //   timeline.add({
  //     // targets: staggerRef.current,
  //     translateY: -230,
  //   });
  // timeline.add({
  // targets: staggerRef1.current,
  // scale: [1, 2, 1],
  // d: [
  //   {
  //     value:
  //       "M202.5 208L214 41L60 166.5L1.5 65.5L88.5 82L214 1.5L300.5 45L551.5 48.5L354 65L494 184.5L300.5 71L202.5 208Z",
  //   },
  // ],
  // asd

  // translateX: 1080,
  // easing: "easeOutQuad",
  // duration: 2000,
  // loop: true,
  // d: [
  //   {
  //     value:
  //       "M0 20C0 8.95431 8.95431 0 20 0H335V20C335 31.0457 326.046 40 315 40H0V20Z",
  //   },
  // ],
  // asd
  // });
  // };

  //   <svg width="335" height="40" viewBox="0 0 335 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M0 20C0 8.95431 8.95431 0 20 0H335V20C335 31.0457 326.046 40 315 40H0V20Z" fill="#D9D9D9"/>
  // </svg>

  useEffect(() => {
    // const tl = gsap.timeline();
    // tl.to(staggerRef1.current, {
    //   x: 900,
    // }).to(staggerRef.current, {
    //   x: -1000,
    // });
    gsap.to(circleRef.current, {
      // scale: 4,
      x: -300,
      // height: "100%",
      // width: "65%",
      duration: 6,
      scale: 1.2,
      // scrollTrigger: {
      //   trigger: staggerRef1.current,
      //   toggleActions: "restart restart restart restart",
      // },
    });

    // const animejsFunc = () => {
    //   const timeline = anime.timeline({
    //     loop: true,
    //     autoplay: false,
    //     duration: 1000,
    //     easing: "easeInOutSine",
    //   });
    //   timeline.add({
    //     targets: staggerRef.current,
    //     d: [{ value: "M12.5 1C4.1 5 1.33333 14.1997 1 20.0V1H12.5Z" }],
    //   });
    // };

    // gsap.to(imageRef.current, {
    //   x: 500,
    //   // height: "100%",
    //   width: "65%",
    //   duration: 0.5,
    //   scrollTrigger: {
    //     trigger: heroCardBigRef.current,
    //     toggleActions: "restart none none none",
    //   },
    // });
    // gsap.to(tagRef.current, {
    //   width: "50%",
    //   display: "flex",
    //   height: "100%",
    //   duration: 2.1,
    //   scrollTrigger: {
    //     trigger: heroCardBigRef.current,
    //     toggleActions: "restart none none none",
    //   },
    // });
  }, []);

  return (
    <>
      <div className="m-auto flex justify-center text-7xl italic font-extralight mt-10 w-full align-middle">
        <div className=" tracking-tight">Latest</div>
        <div className="text-sm ml-2 tracking-tighter">Category</div>
      </div>
      <div className=" h-20 bg-red-100 ">
        {/* <svg
          width="598"
          height="283"
          viewBox="0 0 598 283"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          // ref={staggerRef}
          onClick={animejsFunc}
          className="flex justify-center m-auto "
        >
          <path
            // ref={staggerRef1}
            d="M202.5 282L119.5 222.5L60 240.5L1.5 139.5L138.5 115L187 1L318.5 93L551.5 122.5L597 165.5L494 258.5L332.5 195L202.5 282Z"
            stroke="black"
            fill="black"
          />
        </svg> */}

        {/* <svg
          ref={staggerRef}
          onClick={animejsFunc}
          width="130"
          height="200"
          viewBox="0 0 13 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex justify-center m-auto"
        >
          <path
            d="M12.5 1C4.1 3 1.33333 14.1667 1 19.5V1H12.5Z"
            // d="70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369"
            stroke="black"
            fill="red"
          /> */}
        {/* </svg> */}
      </div>
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

      <svg
        width="728"
        viewBox="0 0 169 228"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="phone">
          <g id="phone_2" filter="url(#filter0_d)">
            <rect
              x="30"
              y="13"
              width="113"
              height="204"
              rx="18"
              fill="#F9F9F9"
            />
          </g>
          <g id="skeleton">
            <rect
              id="Rectangle 2"
              x="42"
              y="47"
              width="29"
              height="9"
              rx="1"
              fill="#E7E7E7"
            />
            <rect
              id="Rectangle 3"
              x="74"
              y="47"
              width="26"
              height="9"
              rx="1"
              fill="#E7E7E7"
            />
            <rect
              id="Rectangle 6"
              x="103"
              y="47"
              width="26"
              height="9"
              rx="1"
              fill="#E7E7E7"
            />
            <rect
              id="Rectangle 4"
              x="42"
              y="59"
              width="44"
              height="9"
              rx="1"
              fill="#E7E7E7"
            />
            <rect
              id="Rectangle 5"
              x="89"
              y="59"
              width="23"
              height="9"
              rx="1"
              fill="#E7E7E7"
            />
            <rect
              id="Rectangle 7"
              x="115"
              y="59"
              width="15"
              height="9"
              rx="1"
              fill="#E7E7E7"
            />
            <circle id="Ellipse 1" cx="47" cy="30" r="5" fill="#E7E7E7" />
            <g id="Group 1">
              <rect
                id="Rectangle 9"
                x="119"
                y="26"
                width="12"
                height="2"
                fill="#E7E7E7"
              />
              <rect
                id="Rectangle 10"
                x="119"
                y="29"
                width="12"
                height="2"
                fill="#E7E7E7"
              />
              <rect
                id="Rectangle 11"
                x="119"
                y="32"
                width="12"
                height="2"
                fill="#E7E7E7"
              />
            </g>
            <g id="Group 2">
              <rect
                id="Rectangle 12"
                x="47"
                y="114"
                width="36"
                height="31"
                rx="2"
                fill="#E7E7E7"
              />
              <path
                id="Polygon 1"
                d="M56.5 124.5L66.5 134.5L75.5 127.5L83 134V143C83 144.105 82.1046 145 81 145H49C47.8954 145 47 144.105 47 143V134L56.5 124.5Z"
                fill="#C4C4C4"
              />
            </g>
            <g id="Group 3">
              <rect
                id="Rectangle 12_2"
                x="90"
                y="114"
                width="36"
                height="31"
                rx="2"
                fill="#E7E7E7"
              />
              <path
                id="Polygon 1_2"
                d="M99.5 124.5L109.5 134.5L118.5 127.5L126 134V143C126 144.105 125.105 145 124 145H92C90.8954 145 90 144.105 90 143V134L99.5 124.5Z"
                fill="#C4C4C4"
              />
            </g>
            <g id="Group 4">
              <rect
                id="Rectangle 12_3"
                x="47"
                y="158"
                width="36"
                height="31"
                rx="2"
                fill="#E7E7E7"
              />
              <path
                id="Polygon 1_3"
                d="M56.5 168.5L66.5 178.5L75.5 171.5L83 178V187C83 188.105 82.1046 189 81 189H49C47.8954 189 47 188.105 47 187V178L56.5 168.5Z"
                fill="#C4C4C4"
              />
            </g>
            <g id="Group 5">
              <rect
                id="Rectangle 12_4"
                x="90"
                y="158"
                width="36"
                height="31"
                rx="2"
                fill="#E7E7E7"
              />
              <path
                id="Polygon 1_4"
                d="M99.5 168.5L109.5 178.5L118.5 171.5L126 178V187C126 188.105 125.105 189 124 189H92C90.8954 189 90 188.105 90 187V178L99.5 168.5Z"
                fill="#C4C4C4"
              />
            </g>
            <rect
              id="Rectangle 8"
              x="56"
              y="79"
              width="63"
              height="17"
              rx="8.5"
              fill="#E7E7E7"
            />
          </g>
          <g id="bolt">
            {/* <g id="bolt5" style={{"--order: 5"}}> */}
            <g id="bolt5" style={{ order: 5 }}>
              <circle id="Ellipse 2" cx="124" cy="115" r="8" fill="#60FF52" />
              <path
                id="Vector"
                d="M127.198 114.486H124.677L126.854 110.656C126.907 110.561 126.907 110.446 126.853 110.352C126.798 110.258 126.698 110.2 126.589 110.2H122.933C122.802 110.2 122.685 110.284 122.644 110.408L120.816 115.913C120.785 116.006 120.8 116.108 120.857 116.188C120.915 116.267 121.007 116.314 121.105 116.314H123.69L122.044 120.175C121.985 120.313 122.034 120.472 122.16 120.552C122.284 120.632 122.451 120.611 122.551 120.498L127.426 114.993C127.506 114.903 127.525 114.775 127.476 114.666C127.427 114.556 127.318 114.486 127.198 114.486V114.486Z"
                fill="white"
              />
            </g>
            <g id="bolt4" style={{ order: 4 }}>
              <circle id="Ellipse 2_2" cx="80" cy="115" r="8" fill="#60FF52" />
              <path
                id="Vector_2"
                d="M83.1984 114.486H80.6767L82.8536 110.656C82.9075 110.561 82.9071 110.446 82.8527 110.352C82.798 110.258 82.6977 110.2 82.5891 110.2H78.9328C78.8017 110.2 78.6853 110.284 78.6439 110.408L76.8158 115.913C76.7845 116.006 76.8003 116.108 76.8575 116.188C76.9149 116.267 77.0069 116.314 77.1047 116.314H79.6895L78.0435 120.175C77.9846 120.313 78.034 120.472 78.1601 120.552C78.2842 120.632 78.4509 120.611 78.5511 120.498L83.4261 114.993C83.5058 114.903 83.5255 114.775 83.4764 114.666C83.4273 114.556 83.3184 114.486 83.1984 114.486V114.486Z"
                fill="white"
              />
            </g>
            <g id="bolt3" style={{ order: 3 }}>
              <circle id="Ellipse 2_3" cx="80" cy="160" r="8" fill="#60FF52" />
              <path
                id="Vector_3"
                d="M83.1984 159.486H80.6767L82.8536 155.656C82.9075 155.561 82.9071 155.446 82.8527 155.352C82.798 155.258 82.6977 155.2 82.5891 155.2H78.9328C78.8017 155.2 78.6853 155.284 78.6439 155.408L76.8158 160.913C76.7845 161.006 76.8003 161.108 76.8575 161.188C76.9149 161.267 77.0069 161.314 77.1047 161.314H79.6895L78.0435 165.175C77.9846 165.313 78.034 165.472 78.1601 165.552C78.2842 165.632 78.4509 165.611 78.5511 165.498L83.4261 159.993C83.5058 159.903 83.5255 159.775 83.4764 159.666C83.4273 159.556 83.3184 159.486 83.1984 159.486V159.486Z"
                fill="white"
              />
            </g>
            <g id="bolt2" style={{ order: 2 }}>
              <circle id="Ellipse 2_4" cx="123" cy="160" r="8" fill="#60FF52" />
              <path
                id="Vector_4"
                d="M126.198 159.486H123.677L125.854 155.656C125.907 155.561 125.907 155.446 125.853 155.352C125.798 155.258 125.698 155.2 125.589 155.2H121.933C121.802 155.2 121.685 155.284 121.644 155.408L119.816 160.913C119.785 161.006 119.8 161.108 119.857 161.188C119.915 161.267 120.007 161.314 120.105 161.314H122.69L121.044 165.175C120.985 165.313 121.034 165.472 121.16 165.552C121.284 165.632 121.451 165.611 121.551 165.498L126.426 159.993C126.506 159.903 126.525 159.775 126.476 159.666C126.427 159.556 126.318 159.486 126.198 159.486V159.486Z"
                fill="white"
              />
            </g>
            <g id="bolt1" style={{ order: 1 }}>
              <rect
                id="Rectangle 9_2"
                x="56"
                y="79"
                width="63"
                height="17"
                rx="8.5"
                fill="#60FF52"
              />
              <g id="Group 10">
                <path
                  id="Vector_5"
                  d="M91.3984 86.2859H88.8767L91.0536 82.4558C91.1075 82.3615 91.1071 82.2457 91.0527 82.1517C90.998 82.0578 90.8977 82 90.7891 82H87.1328C87.0017 82 86.8853 82.0839 86.8439 82.2083L85.0158 87.713C84.9845 87.8058 85.0003 87.9081 85.0575 87.9876C85.1149 88.0671 85.2069 88.114 85.3047 88.114H87.8895L86.2435 91.9754C86.1846 92.1126 86.234 92.2724 86.3601 92.3524C86.4842 92.4317 86.6509 92.4108 86.7511 92.2977L91.6261 86.793C91.7058 86.7034 91.7255 86.5751 91.6764 86.466C91.6273 86.3565 91.5184 86.2859 91.3984 86.2859V86.2859Z"
                  fill="white"
                />
              </g>
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="26"
            y="13"
            width="121"
            height="212"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <svg
        width="111"
        height="55"
        viewBox="0 0 111 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_1_3)">
          <rect x="4" width="103" height="47" fill="#D9D9D9" />
        </g>
        <defs>
          <filter
            id="filter0_d_1_3"
            x="0"
            y="0"
            width="111"
            height="55"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="10" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_3"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_3"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      {/* and color burn  */}

      <svg
        width="1512"
        height="982"
        viewBox="0 0 1512 982"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="MacBook Pro 14&#34; - 1" clip-path="url(#clip0_1_2)">
          <rect width="1512" height="982" fill="white" />
          <g id="Ellipse 1" filter="url(#filter0_f_1_2)" ref={circleRef}>
            <circle cx="530" cy="452" r="25" fill="black" />
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
              stdDeviation="12.5"
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

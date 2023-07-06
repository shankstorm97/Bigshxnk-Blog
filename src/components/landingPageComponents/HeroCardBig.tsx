"use client";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";

const HeroCardBig = () => {
  const heroCardBigRef = useRef(null);

  console.log(heroCardBigRef);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(heroCardBigRef.current, {
      y: 200,
      opacity: 0,
      duration: 3,
      scrollTrigger: {
        trigger: heroCardBigRef.current,
      },
    });
  }, []);

  return (
    <>
      <div
        className="h-[64rem] w-full m-auto bg-gradient-to-b from-neutral-600 to-black"
        ref={heroCardBigRef}
      >
        <div className="max-w-[95%] bg-neutral-500 m-auto w-full h-full flex">
          ;pokijuhgv
        </div>
      </div>
    </>
  );
};

export default HeroCardBig;

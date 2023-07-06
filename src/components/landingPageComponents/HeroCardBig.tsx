"use client";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Power0 } from "gsap";

const HeroCardBig = () => {
  const heroCardBigRef = useRef(null);

  console.log(heroCardBigRef);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.to(heroCardBigRef.current, {
      y: -10,
      duration: 0.1,
      scrollTrigger: {
        trigger: heroCardBigRef.current,
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <>
      <div className="h-[64rem] w-full m-auto bg-gradient-to-b from-neutral-600 to-black">
        <div className="max-w-[95%] bg-neutral-500 m-auto w-full h-full flex">
          <h1 ref={heroCardBigRef}>This is the reference heading.</h1>
        </div>
      </div>
    </>
  );
};

export default HeroCardBig;

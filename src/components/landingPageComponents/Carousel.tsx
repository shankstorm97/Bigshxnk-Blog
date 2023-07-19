"use client";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";

const imgArray = [
  "https://images.unsplash.com/photo-1682687980961-78fa83781450?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1689703400849-4befa701d0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2234&q=80",
  "https://plus.unsplash.com/premium_photo-1688045802023-60a42a082776?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  "https://images.unsplash.com/photo-1689350098202-2243880001fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  "https://images.unsplash.com/photo-1646960706799-d178b8c5604f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
];

const Carousel = () => {
  const animateRef = useRef(null);
  useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.to(animateRef.current, {  });
  }, []);
  return (
    <div
      className=" h-[100vh] w-full flex overflow-hidden overflow-x-scroll transformer"
      ref={animateRef}
    >
      {imgArray.map((item) => (
        <img
          src={item}
          alt=""
          className=" h-[50vh] w-[50vw] p-2 container flex justify-center align-middle m-auto"
        />
      ))}
    </div>
  );
};

export default Carousel;

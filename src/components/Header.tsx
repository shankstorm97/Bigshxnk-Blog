"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import { gsap } from "gsap";
import ThemeButton from "./ThemeButton";

const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});
const presicav = localFont({
  src: "../fonts/PresicavRg-Bold.ttf",
});

function Header() {
  const subscribe = useRef(null);
  const menu = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(subscribe.current, {
      duration: 1,
      opacity: 0,
      y: 5,
    });
    console.log(subscribe.current);
  }, []);

  return (
    <main className="border-b border-black ">
      <header className="flex container mx-auto mt-2 justify-between">
        <Link
          href="/subscribe"
          className={presicav.className}
          style={{ fontSize: 25 }}
          ref={subscribe}
        >
          Subscribe
        </Link>
        <Link href="/">Logo</Link>
        <button
          className={presicav.className}
          style={{ fontSize: 25 }}
          ref={menu}
        >
          Menu
        </button>
      </header>
    </main>
  );
}

export default Header;

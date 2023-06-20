"use client";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import { gsap } from "gsap";

const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});

function Header() {
  const subscribe = useRef(null);
  useEffect(() => {
    let tl = gsap.timeline();
    tl.from(subscribe.current, {
      duration: 2,
      opacity: 1,
      x: -30,
    });
    console.log(subscribe.current);
  }, []);

  return (
    <header className="flex container mx-auto mt-4 justify-between">
      <Link
        href="/subscribe"
        className="subscribe"
        style={{ fontSize: 25 }}
        ref={subscribe}
      >
        Subscribe
      </Link>
      <Link href="/">Logo</Link>
      <button className={vanillaRavioli.className} style={{ fontSize: 25 }}>
        Menu
      </button>
    </header>
  );
}

export default Header;

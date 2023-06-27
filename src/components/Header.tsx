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
      y: -10,
    });
    console.log(subscribe.current);
  }, []);

  return (
    <main className="border-b border-black ">
      <header className="flex container mx-auto mt">
        <div
          style={{
            fontSize: 16,
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <Link
            href="/subscribe"
            className={presicav.className}
            ref={subscribe}
          >
            Subscribe
          </Link>
        </div>

        <div
          style={{
            fontSize: 30,
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link
            href="/subscribe"
            className={vanillaRavioli.className}
            ref={subscribe}
          >
            SociousE
          </Link>
        </div>
        <div
          style={{
            fontSize: 16,
            flex: "1",
            display: "flex",
            alignItems: "center",
            justifyContent: "right",
          }}
        >
          <button className={presicav.className} ref={menu}>
            Menu
          </button>
        </div>
      </header>
    </main>
  );
}

export default Header;

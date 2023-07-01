import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Tilt_Prism } from "next/font/google";
// import { Bodoni_Moda } from "next/font/google";
// import { Oswald } from "next/font/google";
import Man from "../man.jpg";
import ThemeButton from "@/components/ThemeButton";
import { client } from "../lib/contentful/client";
import { getAllPosts } from "@/lib/contentful/functions";
import { gsap } from "gsap";

// import styles from "./page.module.css";
const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});
const presicav = localFont({
  src: "../fonts/PresicavRg-Bold.ttf",
});

const inter = Inter({ subsets: ["latin"] });
const tiltPrism = Tilt_Prism({ subsets: ["latin"] });
// const cinzel = Bodoni_Moda({ subsets: ["latin"] });
// const oswald = Oswald({ subsets: ["latin"] });

interface Sys {
  space: object;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: object;
  createdBy: object;
  updatedBy: object;
  version: number;
  visibility: string;
}

interface Tag {
  sys: Sys;
  name: string;
}

export default async function Home() {
  const getPosts = await getAllPosts();
  console.log(getPosts.items);
  return (
    <>
      <ThemeButton />
      <div className="landing-page flex justify-center align-middle">
        <div className="text-9xl pt-2 ">BLOG OF THE DAY</div>
      </div>
    </>
  );
}

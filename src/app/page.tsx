import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Tilt_Prism } from "next/font/google";
// import { Bodoni_Moda } from "next/font/google";
// import { Oswald } from "next/font/google";
import Image from "next/image";
import Man from "../man.jpg";
import Header from "@/components/Header";
import ThemeButton from "@/components/ThemeButton";
import { client } from "../lib/contentful/client";
import {
  getAllPosts,
  getAllTags,
  getPostsByTag,
} from "@/lib/contentful/functions";
import TagSearch from "@/components/TagSearch";
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
      <div className="landing-page">
        <div className="">BLOG OF THE DAY</div>
      </div>
    </>
  );
}

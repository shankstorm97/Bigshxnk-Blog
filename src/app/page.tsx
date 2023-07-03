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
import PostCard from "@/components/PostCard";

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

export default async function Home() {
  const getPosts = await getAllPosts();
  const postItems = getPosts.items;

  return (
    <>
      <ThemeButton />
      <div className="landing-page flex justify-center align-middle">
        <h1 className="text-9xl pt-2 ">BLOG OF THE WEEK</h1>
      </div>
      {postItems.map((items: Entry) => {
        return <PostCard {...items} />;
      })}
    </>
  );
}

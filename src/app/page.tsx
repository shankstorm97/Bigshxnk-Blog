import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Tilt_Prism } from "next/font/google";
// import { Bodoni_Moda } from "next/font/google";
// import { Oswald } from "next/font/google";
import Man from "../man.jpg";
import ThemeButton from "@/components/ThemeButton";
import { client } from "../lib/contentful/client";
import {
  getAllPosts,
  getPostsByTag,
  getSingleAsset,
  getSingleEntry,
} from "@/lib/contentful/functions";
import { gsap } from "gsap";
import PostCard from "@/components/PostCard";
import Image from "next/image";

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
  // console.log(getPosts.items[0].fields);
  const weeklyBlogData = await getPostsByTag("blogOfTheWeek");
  // console.log(weeklyBlogData.items[0].fields);
  const assetItems = await getSingleAsset(
    `${weeklyBlogData.items[0].fields.coverImage.sys.id}`
  );
  // console.log(weeklyBlogData.items[0].fields.coverImage.sys.id);
  const coverImageUrl = assetItems.fields.file.url;
  const { title } = weeklyBlogData.items[0].fields;

  return (
    <>
      <ThemeButton />
      <div className="landing-page flex justify-center align-middle">
        <h1 className="text-9xl pt-2 ">BEST OF THE WEEK</h1>
      </div>
      <div className="h-[44rem] w-full m-auto flex justify-center align-middle bg-gradient-to-b from-white to-neutral-600 mt-4">
        <Image
          src={`https:${coverImageUrl}`}
          alt="Blog-of-the-week-image"
          width={1000}
          height={1000}
        />
        <div>{title}</div>
      </div>

      {/* {postItems.map((items: Entry) => {
        return <PostCard {...items} />;
      })} */}
    </>
  );
}

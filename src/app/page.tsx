import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { Tilt_Prism } from "next/font/google";
import { Bodoni_Moda } from "next/font/google";
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

import PostCard from "@/components/PostCard";
import Image from "next/image";
import { gsap } from "gsap";
import HeroCardBig from "@/components/landingPageComponents/HeroCardBig";

// import styles from "./page.module.css";
const vanillaRavioli = localFont({
  src: "../fonts/VanillaRavioli.ttf",
});
const presicav = localFont({
  src: "../fonts/PresicavRg-Bold.ttf",
});

const inter = Inter({ subsets: ["latin"] });
const tiltPrism = Tilt_Prism({ subsets: ["latin"] });
const cinzel = Bodoni_Moda({ subsets: ["latin"] });
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
        <h1 className="lg:text-8xl text-center md:text-7xl sm:text-6xl xl:text-9xl xs:text-4xl xxs:text-2xl pt-2">
          BLOG OF THE WEEK
        </h1>
      </div>
      <div className="h-full w-full m-auto flex justify-center align-middle bg-gradient-to-b from-white to-neutral-300 hover:text-white text-neutral-900 rounded-b-sm">
        <div className="relative mb-36 h-full grayscale hover:grayscale-0 transition ease-in-out duration-500 overflow-hidden rounded-2xl">
          <Image
            src={`https:${coverImageUrl}`}
            alt="Blog-of-the-week-image"
            width={1200}
            height={1200}
            className="rounded-2xl  hover:scale-110 duration-700 transition ease-in-out object-contain "
          />
          <div className="absolute top-1/3 left-3/6 w-full">
            <h2
              id="myTitleRef"
              className="lg:text-7xl text-center md:text-4xl sm:text-2xl"
            >
              {title}
            </h2>
            {/* Need to make components of all animated effects  */}
          </div>
        </div>
      </div>

      {/* {postItems.map((items: Entry) => {
        return <PostCard {...items} />;
      })} */}

      {/* <div className="h-[64rem] w-full m-auto bg-gradient-to-b from-neutral-600 to-black"> */}
      {/* <div className="max-w-[95%] bg-neutral-500 m-auto w-full h-full flex"> */}
      {/* <div className="rounded-3xl max-w-7xl bg-slate-200 relative">
            <h2 className="absolute top-2 text-3xl bg-orange-300 rounded-md w-3/4 h-fit ltr:text-left left-4 text-left line-clamp-3 tracking-wide">
              {title}
            </h2>
          </div> */}
      <HeroCardBig />
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

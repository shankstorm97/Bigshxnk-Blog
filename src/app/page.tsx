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
import { SplitText } from "gsap-trial/SplitText";

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
  // const myTitleRef = useRef(null);

  // gsap.to(myTitleRef.current, { y: -100, opacity: 1, duration: 2 });

  return (
    <>
      <ThemeButton />
      <div className="landing-page flex justify-center align-middle">
        <h1 className="lg:text-8xl text-center md:text-7xl sm:text-6xl xl:text-9xl xs:text-4xl xxs:text-2xl pt-2">
          BLOG OF THE WEEK
        </h1>
      </div>
      <div className="h-full w-full m-auto flex justify-center align-middle bg-gradient-to-b from-white to-neutral-600 hover:text-white text-neutral-900">
        <div className="relative h-full grayscale hover:grayscale-0 transition ease-in-out duration-500 ">
          <Image
            src={`https:${coverImageUrl}`}
            alt="Blog-of-the-week-image"
            width={1200}
            height={1200}
            className="rounded-2xl "
          />
          <div className=" absolute top-1/3 left-3/6 w-full">
            <h2 className="lg:text-7xl text-center md:text-4xl sm:text-2xl">
              {title}
            </h2>
            {/* Need to make components of all animated effects  */}
          </div>
        </div>
      </div>

      {/* {postItems.map((items: Entry) => {
        return <PostCard {...items} />;
      })} */}
    </>
  );
}

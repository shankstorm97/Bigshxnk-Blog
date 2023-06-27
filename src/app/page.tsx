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
import { getAllPosts, getAllTags } from "@/lib/contentful/functions";

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
  // const entries = await client.getEntries({
  // content_type: "post",
  // "metadata.tags[0].sys.id": "lookGood",
  // "sys.id": "6oiny3Zl1UetOsxXfDTJYL",
  // "tags.sys.id": "lookGood",
  // "fields.title": "my second post",
  // "fields": "my-second-post",
  // });
  // const entries = await client.getEntries({});
  // console.log(entries);

  // const allPosts = await getAllPosts();

  const dataTags = await getAllTags();
  const indTag = await dataTags.data.items;

  console.log(indTag);

  // console.log(dataTags.data.items[0].name);
  // console.log(allPosts.items[0].metadata.tags);

  return (
    <>
      <ThemeButton />
      {indTag.map((tag: Tag, id: number) => {
        return <h2 key={id}>{tag.name}</h2>;
      })}
      {/* <main className="container">
        <div className="container py-5 px-5 mx-auto">
          <div className={presicav.className}>
            <div style={{ fontSize: 30, color: "black" }}>
              Why "The way of superior man" is a must read...
            </div>

            <div className={inter.className}>
              <div style={{ fontSize: 30 }}>
                We all know how men are becoming man-child nowadays.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Image
        src={Man}
        height={2000}
        alt="Man"
        width={2000}
        style={{ borderRadius: 20 }}
        className="flex container mx-auto rounded-lg"
      /> */}
    </>
  );
}

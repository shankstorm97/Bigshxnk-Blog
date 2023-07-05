import { getSingleAsset, getSingleEntry } from "@/lib/contentful/functions";
import React from "react";
import Author from "./Author";

const PostCard = async (items: Entry) => {
  const { title, slug, author, excerpt, content, coverImage } = items?.fields;

  const authorItems = await getSingleEntry(`${author.sys.id}`);
  // const assetItems = await getSingleAsset(`${coverImage}`);
  const assetItems = await getSingleAsset(`${coverImage.sys.id}`);
  const coverImageUrl = assetItems.fields.file.url;
  // console.log(coverImageUrl);
  return (
    <>
    
      {/* <h1>{title}</h1>
      <h2>{slug}</h2>
      <h3>{excerpt}</h3>
      <h2>{authorItems.fields.name}</h2>
      <img
        src={`https:${coverImageUrl}`}
        alt=""
        style={{ height: "450px", width: "450px" }}
      /> */}
    </>
  );
};

export default PostCard;

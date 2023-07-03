import { getSingleEntry } from "@/lib/contentful/functions";
import React from "react";
import Author from "./Author";

const PostCard = async (items: Entry) => {
  const { title, slug, author, excerpt, content, coverImage } = items?.fields;

  // const authorItems = await getSingleEntry(`6CdsYp6FkdfdfDtallR8Hu`);
  // const authorItems = await getSingleEntry(`${author.sys.id}`);
  const authorItems = await getSingleEntry(`${author.sys.id}`);
  //   const { fields } = authorItems.items;
  //   console.log(authorItems.items[0].sys.id);
  // console.log(items.fields.author);
  // console.log(author.sys);
  // console.log(authorItems);
  // console.log("koijbh");
  // console.log(authorItems);
  console.log(author);
  return (
    <>
      <h1>{title}</h1>
      <h2>{slug}</h2>
      <h3>{excerpt}</h3>
      <h2>{authorItems.fields.name}</h2>
    </>
  );
};

export default PostCard;

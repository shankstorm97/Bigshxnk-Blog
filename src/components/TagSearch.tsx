"use client";
import { useEffect } from "react";
import { getAllPosts, getAllTags } from "@/lib/contentful/functions";
// interface Sys {
//   space: object;
//   id: string;
//   type: string;
//   createdAt: string;
//   updatedAt: string;
//   environment: object;
//   createdBy: object;
//   updatedBy: object;
//   version: number;
//   visibility: string;
// }

// interface Tag {
//   sys: Sys;
//   name: string;
//   key: number;
// }

// const getTags = async () => {
//   const response = await axios.get(
//     `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/tags?access_token=${process.env.ACCESS_TOKEN}`
//   );

//   return response;
// };

// import React from "react";

// export default async function TagSearch() {
//   return <div>2sad</div>;
// }

const TagSearch = async () => {
  const dataTags = await getAllTags();
  // console.log(dataTags);
  // const response = await dataTags.then((item) => {
  //   return item;
  // });
  // console.log(dataTags.data.items[0].sys.id);

  // const dataTags = await fetch(
  //   "https://cdn.contentful.com/spaces/deu01t0679sh/environments/master/tags?access_token=2ceDQK24UOk1KFoo4nSBCZb-cpqzO6VynPdJDHAIHBg"
  // );

  // const response = await dataTags.json();
  // const tagData = await getAllTags();
  // const tagData = await getPostsByTag();
  // const indTag = await dataTags.data.items;

  return <div>{dataTags.data.items[0].sys.id}</div>;
};

export default TagSearch;

import { getSingleEntry } from "@/lib/contentful/functions";
import React from "react";

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

interface Sys {
  type: string;
  linkType?: string;
  id: string;
}

interface Metadata {
  tags: string[];
}

interface ContentNode {
  nodeType: string;
  data: any;
  content: Content[];
}

interface Content {
  nodeType: string;
  data: any;
  content: ContentNode[];
}

interface EntryFields {
  title: string;
  slug: string;
  author: Sys;
  excerpt: string;
  coverImage: Sys;
  content: {
    nodeType: string;
    data: any;
    content: ContentNode[];
  };
}

interface Entry {
  metadata: Metadata;
  sys: Sys;
  fields: EntryFields;
}

interface Includes {
  Entry: Entry[];
}

interface AssetFields {
  title: string;
  description: string;
  file: {
    url: string;
    details: {
      size: number;
      image: {
        width: number;
        height: number;
      };
    };
    fileName: string;
    contentType: string;
  };
}

interface Asset {
  metadata: Metadata;
  sys: Sys;
  fields: AssetFields;
}

interface Response {
  sys: Sys;
  total: number;
  skip: number;
  limit: number;
  items: Entry[];
  includes: Includes;
}

const PostCard = async (items: Entry) => {
  const authorItems = await getSingleEntry();
  const { title, slug, author, excerpt, content, coverImage } = items.fields;
  const { fields } = authorItems.items;
  console.log(author);

  return (
    <>
      <h1>{title}</h1>
      <h2>{slug}</h2>
      <h3>{excerpt}</h3>
    </>
  );
};

export default PostCard;

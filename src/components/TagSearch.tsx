"use client";
import { getAllTags } from "@/lib/contentful/functions";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
interface Sys {
  type: string;
  space?: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  environment?: {
    sys: {
      id: string;
      type: string;
      linkType: string;
    };
  };
  createdBy?: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  updatedBy?: {
    sys: {
      type: string;
      linkType: string;
      id: string;
    };
  };
  version?: number;
  visibility?: string;
}

interface Item {
  sys: Sys;
  name: string;
}

interface Data {
  sys: {
    type: string;
  };
  total: number;
  skip: number;
  limit: number;
  items: Item[];
}

const TagSearch = async () => {
  const { data } = await getAllTags();

  return (
    <>
      <div className="centered bottom-6 backdrop-blur-xl w-8/12">
        <div className=" text-l blur-0 border-b m-auto flex justify-center w-1/2 pb-1 font-bold ">
          {data.items.map((tagName: Item) => (
            <p key={tagName.sys.id} className="mr-2 uppercase">
              {tagName.name}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default TagSearch;

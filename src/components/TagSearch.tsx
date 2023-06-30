"use client";
import { getAllTags } from "@/lib/contentful/functions";

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
    <div className="fixed bottom-6 w-full">
      <div className=" text-l blur-0 border-b m-auto flex justify-center w-1/2 pb-1 font-bold">
        {/* <div className="tagSearch"> */}
        {data.items.map((tagName: Item) => (
          <p key={tagName.sys.id} className="mr-2 uppercase">
            {tagName.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TagSearch;

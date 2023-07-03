import axios from "axios";

export const getAllPosts = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=post`
  );
  const data = await response.json();
  return data;
};

export const getSingleEntry = async () => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&content_type=author`
  );
  const data = await response.json();
  return data;
};

export const getPostsByTag = async ({ tag }: any) => {
  const response = await fetch(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/entries?access_token=${process.env.ACCESS_TOKEN}&metadata.tags.sys.id[all]=${tag}`
  );
  const data = await response.json();
  return data;
};
export const getAllTags = async () => {
  const response = await axios.get(
    `https://cdn.contentful.com/spaces/${process.env.SPACE_ID}/environments/master/tags?access_token=${process.env.ACCESS_TOKEN}`
  );

  return response;
};

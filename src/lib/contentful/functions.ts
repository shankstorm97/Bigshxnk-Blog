import { client } from "./client";

export const getBlogPosts = async () => {
  const response = await client.getEntries({ content_type: "post" });
  return response;
};

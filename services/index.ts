import { GET_POSTS } from "@/graphql/query"
import { request } from "graphql-request"

const url = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""

export const getPosts = async () => {
  const { posts } = await request<{ posts: Post[] }>(url, GET_POSTS)
  return posts
}

import { GET_POSTS, GET_RECENT_POSTS, GET_CATEGORIES } from "@/graphql/query"
import { request } from "graphql-request"

const url = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""

type PostsData = {
  posts: Post[]
}

export const getPosts = async () => {
  const { posts } = await request<PostsData>(url, GET_POSTS)
  return posts
}

export const getRecentPosts = async () => {
  const { posts } = await request<PostsData>(url, GET_RECENT_POSTS)
  return posts
}

type CategoriesData = {
  categories: Category[]
}

export const getCategories = async () => {
  const { categories } = await request<CategoriesData>(url, GET_CATEGORIES)
  return categories
}

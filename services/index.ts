import {
  GET_POSTS,
  GET_RECENT_POSTS,
  GET_RELATED_POSTS,
  GET_CATEGORIES,
  GET_POST,
  GET_POST_SLUGS,
} from "@/graphql/query"
import { request } from "graphql-request"

const url = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT || ""

type PostData = {
  post: Post
}

type GetPostVariables = {
  slug: string
}

export const getPost = async (variables: GetPostVariables) => {
  const { post } = await request<PostData>(url, GET_POST, variables)
  return post
}

type PostsData = {
  posts: Post[]
}

export const getPostSlugs = async () => {
  const { posts } = await request<PostsData>(url, GET_POST_SLUGS)
  return posts.map(({ slug }) => slug)
}

export const getPosts = async () => {
  const { posts } = await request<PostsData>(url, GET_POSTS)
  return posts
}

export const getRecentPosts = async () => {
  const { posts } = await request<PostsData>(url, GET_RECENT_POSTS)
  return posts
}

type GetRelatedPostsVariables = {
  slug: string
  categories: string[]
}

export const getRelatedPosts = async (variables: GetRelatedPostsVariables) => {
  const { posts } = await request<PostsData>(url, GET_RELATED_POSTS, variables)
  return posts
}

type CategoriesData = {
  categories: Category[]
}

export const getCategories = async () => {
  const { categories } = await request<CategoriesData>(url, GET_CATEGORIES)
  return categories
}

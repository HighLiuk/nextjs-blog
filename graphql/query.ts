import { gql } from "graphql-request"

export const GET_POST: string = gql`
  query GetPost($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      excerpt
      createdAt
      featuredImage {
        url
      }
      content {
        json
      }
      author {
        id
        name
        bio
        photo {
          url
        }
      }
      categories {
        name
        slug
      }
    }
  }
`

export const GET_POST_SLUGS: string = gql`
  query GetPostSlugs {
    posts {
      slug
    }
  }
`

export const GET_POSTS: string = gql`
  query GetPosts {
    posts {
      title
      slug
      excerpt
      createdAt
      featuredImage {
        url
      }
      author {
        id
        name
        bio
        photo {
          url
        }
      }
      categories {
        name
        slug
      }
    }
  }
`

export const GET_RECENT_POSTS: string = gql`
  query GetRecentPosts {
    posts(orderBy: createdAt_ASC, last: 3) {
      title
      slug
      createdAt
      featuredImage {
        url
      }
    }
  }
`

export const GET_RELATED_POSTS: string = gql`
  query GetRelatedPosts($slug: String!, $categories: [String!]!) {
    posts(
      where: {
        slug_not: $slug
        AND: { categories_some: { slug_in: $categories } }
      }
      orderBy: createdAt_ASC
      last: 3
    ) {
      title
      slug
      createdAt
      featuredImage {
        url
      }
    }
  }
`

export const GET_CATEGORIES: string = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`

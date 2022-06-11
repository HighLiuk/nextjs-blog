import { gql } from "graphql-request"

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

export const GET_CATEGORIES: string = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`

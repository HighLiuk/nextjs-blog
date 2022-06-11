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

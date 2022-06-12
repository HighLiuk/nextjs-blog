import {
  Author,
  Categories,
  CommentForm,
  Comments,
  PostDetails,
  PostWidget,
} from "@/components"
import { getPost, getPostSlugs, getRelatedPosts } from "@/services"
import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

type Props = {
  post: Post
  relatedPosts: Post[]
}

const Post: NextPage<Props> = ({ post, relatedPosts }) => {
  return (
    <>
      <div className="container mx-auto mb-8 px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetails post={post} />

            <Author author={post.author} />

            <CommentForm slug={post.slug} />

            <Comments slug={post.slug} />
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget posts={relatedPosts} title="Related Posts" />

              <Categories categories={post.categories} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string

  const post = await getPost({ slug })

  const categories = post.categories.map(({ slug }) => slug)

  const relatedPosts = await getRelatedPosts({ slug, categories })

  return {
    props: {
      post,
      relatedPosts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getPostSlugs()

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  }
}

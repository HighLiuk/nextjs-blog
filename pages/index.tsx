import Head from "next/head"
import type { GetStaticProps, NextPage } from "next"
import { Categories, PostCard, PostWidget } from "@/components"
import { getPosts, getRecentPosts } from "@/services"

type Props = {
  posts: Post[]
  recentPosts: Post[]
}

const Home: NextPage<Props & InitialProps> = ({
  posts,
  recentPosts,
  globals,
}) => {
  return (
    <>
      <div className="container mx-auto mb-8 px-10">
        <Head>
          <title>CMS Blog</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-8">
            {posts.map((post, i) => (
              <PostCard key={i} post={post} />
            ))}
          </div>

          <div className="col-span-1 lg:col-span-4">
            <div className="relative top-8 lg:sticky">
              <PostWidget posts={recentPosts} title="Recent Posts" />

              <Categories categories={globals.categories} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [posts, recentPosts] = await Promise.all([getPosts(), getRecentPosts()])

  return {
    props: {
      posts,
      recentPosts,
    },
  }
}

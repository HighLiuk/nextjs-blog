import Head from "next/head"
import type { NextPage } from "next"
import { Categories, PostCard, PostWidget } from "@/components"

const posts: Post[] = [
  {
    title: "React Testing",
    excerpt: "Learn React Testing",
  },
  {
    title: "React with Tailwind",
    excerpt: "Learn React with Tailwind",
  },
]

const Home: NextPage = () => {
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
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
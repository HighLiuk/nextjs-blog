import moment from "moment"
import Link from "next/link"
import { FC } from "react"

type Props = {
  title: string
  posts: Post[]
}

const PostWidget: FC<Props> = ({ title, posts }) => {
  return (
    <>
      <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
        <h3 className="mb-8 border-b pb-4 text-xl font-semibold">{title}</h3>

        {posts.map((post, i) => (
          <div key={i} className="mb-4 flex w-full items-center">
            <div className="w-16 flex-none">
              {/* eslint-disable-next-line */}
              <img
                className="rounded-full align-middle"
                height={60}
                width={60}
                src={post.featuredImage.url}
                alt={post.title}
              />
            </div>

            <div className="ml-4 flex-grow">
              <p className="text-xs text-gray-500">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>

              <Link href={`/posts/${post.slug}`} className="text-base">
                {post.title}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default PostWidget

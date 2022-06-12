import moment from "moment"
import Image from "next/image"
import { FC } from "react"
import RichTextRenderer from "./RichTextRenderer"

type Props = {
  post: Post
}

const PostDetails: FC<Props> = ({ post }) => {
  return (
    <>
      <div className="mb-8 rounded-lg bg-white pb-12 shadow-lg lg:p-8">
        <div className="relative mb-6 overflow-hidden shadow-md">
          {/* eslint-disable-next-line */}
          <img
            className="h-full w-full rounded-t-lg object-top"
            src={post.featuredImage.url}
            alt={post.title}
          />
        </div>

        <div className="px-4 lg:px-0">
          <div className="mb-8 flex w-full items-center">
            <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto">
              <Image
                className="rounded-full align-middle"
                height={30}
                width={30}
                src={post.author.photo.url}
                alt={post.author.name}
                unoptimized
              />

              <p className="ml-2 inline align-middle text-lg text-gray-700">
                {post.author.name}
              </p>
            </div>

            <div className="font-medium text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2 inline h-6 w-6 text-pink-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>

              <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
            </div>
          </div>

          <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>

          <RichTextRenderer content={post.content.json} />
        </div>
      </div>
    </>
  )
}

export default PostDetails

import { FC } from "react"

type Props = {
  post: Post
}

const PostCard: FC<Props> = ({ post }) => {
  return (
    <>
      <div>
        {post.title}
        {post.excerpt}
      </div>
    </>
  )
}

export default PostCard

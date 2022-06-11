import Link from "next/link"
import { FC } from "react"

type Props = {
  categories: Category[]
}

const Categories: FC<Props> = ({ categories }) => {
  return (
    <>
      <div className="mb-8 rounded-lg bg-white p-8 shadow-lg">
        <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>

        {categories.map((category, i) => (
          <Link
            key={i}
            href={`/categories/${category.slug}`}
            className="text-base"
          >
            <span className="mb-3 block cursor-pointer pb-3">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Categories

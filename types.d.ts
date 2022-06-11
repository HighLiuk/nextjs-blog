interface Post {
  title: string
  slug: string
  excerpt: string
  createdAt: string
  featuredImage: Asset
  author: Author
  categories: Category[]
}

interface Category {
  name: string
  slug: string
}

interface Author {
  id: string
  name: string
  bio: string
  photo: Asset
}

interface Asset {
  url: string
}

import { FC, PropsWithChildren } from "react"
import Header from "./Header"

type Props = {
  categories: Category[]
}

const Layout: FC<PropsWithChildren<Props>> = ({ children, categories }) => {
  return (
    <>
      <Header categories={categories} />

      {children}
    </>
  )
}

export default Layout

import { Layout } from "@/components"
import { getCategories } from "@/services"
import type { AppProps } from "next/app"
import "../styles/globals.scss"

function MyApp({ Component, pageProps, globals }: AppProps & InitialProps) {
  return (
    <>
      <Layout categories={globals.categories}>
        <Component {...pageProps} globals={globals} />
      </Layout>
    </>
  )
}

MyApp.getInitialProps = async () => {
  return {
    globals: {
      categories: await getCategories(),
    },
  }
}

export default MyApp

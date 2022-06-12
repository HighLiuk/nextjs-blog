import { NodeRendererType, RichText } from "@graphcms/rich-text-react-renderer"
import { RichTextContent } from "@graphcms/rich-text-types"
import { FC } from "react"

type Props = {
  content: RichTextContent
}

const RichTextRenderer: FC<Props> = ({ content }) => {
  const renderers: NodeRendererType = {
    h3({ children }) {
      return <h3 className="mb-4 text-xl font-semibold">{children}</h3>
    },
    h4({ children }) {
      return <h4 className="text-md mb-4 font-semibold">{children}</h4>
    },
    p({ children }) {
      return <p className="mb-8">{children}</p>
    },
  }

  return (
    <>
      <RichText content={content} renderers={renderers} />
    </>
  )
}

export default RichTextRenderer

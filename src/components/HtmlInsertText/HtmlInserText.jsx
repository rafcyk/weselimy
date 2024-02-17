import { Heading } from "../Heading/Heading"

export const HtmlInserText = ({
  title,
  htmlText,
}) => {
  return (
    <section className={`section`}>
    <Heading className={`sectionHeading`}>{title}</Heading>
    <div dangerouslySetInnerHTML={{ __html: htmlText }} />
  </section>
  )
}
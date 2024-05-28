import PageWidth from './utils/PageWidth'

/* eslint-disable react/prop-types */
const Section = ({ children, className, id, headingText }) => {
  const ownClasses = 'relative p-4 [ md:px-16 ]'
  return (
    <PageWidth>
      <section className={`${ownClasses} ${className}`} id={id}>
        {headingText && (
          <h2 className="text-clamp-lg font-semibold pb-4 border-b border-zinc-700">
            {headingText}
          </h2>
        )}
        {children}
      </section>
    </PageWidth>
  )
}

export default Section

import PageWidth from './utils/PageWidth'

/* eslint-disable react/prop-types */
const Section = ({ children, className, id }) => {
  const ownClasses = 'relative border-b border-zinc-50/10'
  return (
    <PageWidth className={`${ownClasses} ${className}`}>
      <section id={id} className={`${ownClasses} ${className || ''}`}>
        {children}
      </section>
    </PageWidth>
  )
}

export default Section

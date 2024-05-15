import PageWidth from './utils/PageWidth'

/* eslint-disable react/prop-types */
const Section = ({ children, className, id }) => {
  const ownClasses = 'relative'
  return (
    <PageWidth>
      <section id={id} className={`${ownClasses} ${className || ''}`}>
        {children}
      </section>
    </PageWidth>
  )
}

export default Section

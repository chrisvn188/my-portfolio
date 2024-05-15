/* eslint-disable react/prop-types */
const Section = ({ children, className, id }) => {
  const classes = className
  return (
    <section id={id} className={`${classes}`}>
      {children}
    </section>
  )
}

export default Section

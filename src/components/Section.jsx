/* eslint-disable react/prop-types */
const Section = ({ children, className, id }) => {
  const classes = className
  return (
    <section id={id} className={`pt-[5rem] pb-[5rem] ${classes}`}>
      {children}
    </section>
  )
}

export default Section

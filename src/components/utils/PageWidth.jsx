/* eslint-disable react/prop-types */
const PageWidth = ({ children, className }) => {
  const ownClasses = 'max-w-[96rem] mx-auto'
  return <div className={`${ownClasses} ${className || ''}`}>{children}</div>
}

export default PageWidth

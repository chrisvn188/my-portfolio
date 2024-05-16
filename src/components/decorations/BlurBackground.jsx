/* eslint-disable react/prop-types */
const BlurBackground = ({ className }) => {
  const ownClasses = 'hidden md:block rounded-full absolute z-0 select-none'
  return <div className={`${ownClasses} ${className || ''}`} />
}

export default BlurBackground

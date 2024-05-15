/* eslint-disable react/prop-types */
const TextPill = ({ className, children }) => {
  let ownClasses =
    'hidden [ lg:absolute lg:inline-block lg:border lg:border-solid lg:px-4 py-2 lg:rounded-full lg:select-none ]'
  return <div className={`${ownClasses} ${className || ''}`}>{children}</div>
}

export default TextPill

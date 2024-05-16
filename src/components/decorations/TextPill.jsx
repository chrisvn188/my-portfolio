/* eslint-disable react/prop-types */
const TextPill = ({ className, children, color }) => {
  let colorClasses = ''
  switch (color) {
    case 'orange':
      colorClasses =
        'lg:text-orange-600/90 lg:border-orange-600/90 lg:bg-orange-950/30'
      break
    case 'indigo':
      colorClasses =
        'lg:text-indigo-600/90 lg:border-indigo-600/90 lg:bg-indigo-950/30'
      break
    case 'pink':
      colorClasses =
        'lg:text-pink-600/90 lg:border-pink-600/90 lg:bg-pink-950/30'
      break
    case 'yellow':
      colorClasses =
        'lg:text-yellow-600/90 lg:border-yellow-600/90 lg:bg-yellow-950/30'
      break
  }
  let ownClasses =
    'hidden [ lg:absolute lg:inline-block lg:border lg:border-solid lg:px-4 py-2 lg:rounded-full lg:select-none ]'
  return (
    <div className={`${ownClasses} ${colorClasses} ${className || ''}`}>
      {children}
    </div>
  )
}

export default TextPill

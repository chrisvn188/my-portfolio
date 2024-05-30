/* eslint-disable react/prop-types */
const TextPill = ({ className, children, color }) => {
  let colorClasses = ''
  switch (color) {
    case 'orange':
      colorClasses =
        'lg:text-orange-400 lg:border-orange-400/30 lg:bg-orange-900/30'
      break
    case 'violet':
      colorClasses =
        'lg:text-violet-400 lg:border-violet-400/30 lg:bg-violet-900/30'
      break
    case 'pink':
      colorClasses = 'lg:text-pink-400 lg:border-pink-400/30 lg:bg-pink-900/30'
      break
    case 'yellow':
      colorClasses =
        'lg:text-yellow-400 lg:border-yellow-400/30 lg:bg-yellow-900/30'
      break
  }
  let ownClasses =
    'hidden [ lg:absolute lg:z-10 lg:inline-block lg:border lg:border-solid lg:px-4 py-2 lg:rounded-full lg:select-none ]'
  return (
    <div className={`${ownClasses} ${colorClasses} ${className || ''}`}>
      {children}
    </div>
  )
}

export default TextPill

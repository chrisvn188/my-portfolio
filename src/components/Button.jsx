/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({ href, isIcon, onClick, className, children }) => {
  const classes = `${
    isIcon
      ? 'w-10 h-10 grid place-items-center'
      : 'px-6 py-4 [ md:px-8 md:py-4 ] font-medium bg-violet-600 text-900 text-slate-50 rounded-full inline-block'
  }`

  const makeButton = () => {
    return (
      <button onClick={onClick} className={`${classes} ${className}`}>
        {children}
      </button>
    )
  }
  const makeLink = () => {
    return (
      <a onClick={onClick} className={`${classes} ${className}`} href={href}>
        {children}
      </a>
    )
  }

  return href ? makeLink() : makeButton()
}

export default Button

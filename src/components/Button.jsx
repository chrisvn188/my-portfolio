/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({ href, isIcon, onClick, className, children }) => {
  const classes = `${
    isIcon
      ? 'w-10 h-10 grid place-items-center rounded-full bg-zinc-800 border border-indigo-500'
      : ''
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

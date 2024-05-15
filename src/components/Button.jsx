/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
const Button = ({ href, isIcon, onClick, className, children }) => {
  const classes = `${
    isIcon
      ? 'w-12 h-12 grid place-items-center rounded-full bg-zinc-800 border border-slate-100/50 hover:border-slate-100'
      : 'px-4 py-3 md:px-6 md:py-4 font-bold bg-gradient-to-r from-pink-500 to-indigo-500 text-900 text-slate-50 clip-custom'
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

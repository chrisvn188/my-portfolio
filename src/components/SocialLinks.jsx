import { socialLinks } from '../constants'

const SocialLinks = () => {
  return (
    <ul className="flex gap-4">
      {socialLinks.map(({ id, href, Icon }) => (
        <li key={id}>
          <a
            className="text-zinc-400 hover:text-zinc-50 text-xl"
            href={href}
            target="_blank">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks

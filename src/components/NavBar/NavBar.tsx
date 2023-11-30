import { NAV_LINKS } from '@/utils/constants'
import Link from 'next/link'
import style from './NavBar.module.scss'

export function NavBar() {
  return (
    <nav className={style.navigation}>
      {NAV_LINKS.map((link) => {
        const capitalizedLink = link.charAt(0).toUpperCase() + link.slice(1)

        return (
          <Link href={`/${link}`} key={link} className={style.link}>
            {capitalizedLink}
          </Link>
        )
      })}
    </nav>
  )
}

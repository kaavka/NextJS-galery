import { NAV_LINKS } from '@/utils/constants'
import linkModule from '@/modules/link.module.scss'
import Link from 'next/link'
import style from './NavBar.module.scss'
import { capitalize } from '@/utils/capitalize'

export function NavBar() {
  return (
    <nav className={style.navigation}>
      {NAV_LINKS.map((link) => {
        const capitalizedLink = capitalize(link)

        return (
          <Link href={`/${link}`} key={link} className={linkModule.link}>
            {capitalizedLink}
          </Link>
        )
      })}
    </nav>
  )
}

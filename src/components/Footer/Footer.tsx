import style from './Footer.module.scss'
import { FOOTER_LINKS } from '@/utils/constants'
import linkModule from '@/modules/link.module.scss'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className={style.footer}>
      <h1 className={style.footer__title}>Unsplash</h1>
      <div className={style.footer__links}>
        {FOOTER_LINKS.map(({ url, label }) => (
          <Link href={url} key={label} className={linkModule.link}>
            {label}
          </Link>
        ))}
      </div>
    </footer>
  )
}

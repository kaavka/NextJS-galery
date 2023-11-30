import Image from 'next/image'
import Link from 'next/link'
import style from './LogoLink.module.scss'

export function LogoLink() {
  return (
    <Link href={'/'} className={style.logo}>
      <Image
        src={'/logo-high-resolution-logo-black-transparent.png'}
        className={style.logo__image}
        fill={true}
        alt={'Company logo'}
      />
    </Link>
  )
}

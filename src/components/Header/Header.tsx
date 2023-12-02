import { LogoLink } from '@/components/LogoLink/LogoLink'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { NavBar } from '@/components/NavBar/NavBar'
import style from './Header.module.scss'

export function Header() {
  return (
    <header className={style.header}>
      <div className={style.header__logo}>
        <LogoLink />
      </div>
      <div className={style.header__search}>
        <SearchBar />
      </div>
      <div className={style.header__nav}>
        <NavBar />
      </div>
    </header>
  )
}

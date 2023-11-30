import { LogoLink } from '@/components/LogoLink/LogoLink'
import { SearchBar } from '@/components/SearchBar/SearchBar'
import { NavBar } from '@/components/NavBar/NavBar'

export function Header() {
  return (
    <header>
      <LogoLink />
      <SearchBar />
      <NavBar />
    </header>
  )
}

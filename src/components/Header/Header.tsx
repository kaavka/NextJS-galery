import { LogoLink } from '@/components/LogoLink/LogoLink'
import { SearchBar } from '@/components/SearchBar/SearchBar'

export function Header() {
  return (
    <header>
      <LogoLink />
      <SearchBar />
    </header>
  )
}

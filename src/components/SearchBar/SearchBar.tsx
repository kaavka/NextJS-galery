import style from './Search.module.scss'

export function SearchBar() {
  return (
    <form className={style.search}>
      <input className={style.search__input} />
    </form>
  )
}

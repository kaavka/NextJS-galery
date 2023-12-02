'use client'
import style from './Search.module.scss'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { photosDefaultUrl } from '@/utils/constants'

export function SearchBar() {
  const searchParams = useSearchParams()
  const query = searchParams.get('query') || ''
  const [inputValue, setInputValue] = useState('')
  const router = useRouter()

  useEffect(() => {
    setInputValue(query)
  }, [query])

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputValue) {
      router.push(`/photos/?query=${inputValue}`)

      return
    }

    router.push(photosDefaultUrl)
  }

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const onClear = () => {
    setInputValue('')
  }

  return (
    <form className={style.search} onSubmit={onSubmit}>
      <label
        htmlFor={'search'}
        className={style.search__icon_glass}
        aria-label="Search"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
        >
          <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </label>
      <input
        className={style.search__input}
        placeholder={'Try to enter "snow"'}
        id={'search'}
        value={inputValue}
        onChange={onChange}
      />
      <label
        htmlFor={'search'}
        className={style.search__icon_clear}
        onClick={onClear}
        aria-label="Clear"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
        >
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
        </svg>
      </label>
    </form>
  )
}

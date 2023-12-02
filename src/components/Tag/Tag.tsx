import Link from 'next/link'
import { SearchParams } from '@/types/SearchParams'
import style from './Tag.module.scss'

interface Props {
  searchParams: SearchParams
  title: string
}

export function Tag({ searchParams, title }: Props) {
  return (
    <Link
      href={{
        pathname: '/photos',
        query: { ...searchParams, query: title },
      }}
      key={title}
      className={style.tag}
    >
      {title}
    </Link>
  )
}

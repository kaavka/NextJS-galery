import style from './page.module.scss'
import { api } from '@/api/unsplash'
import links from '@/modules/link.module.scss'
import grid from '@/modules/grid.module.scss'
import classNames from 'classnames'
import Link from 'next/link'
import { ImagesList } from '@/components/ImagesList/ImagesList'
import { splitByColumns } from '@/utils/splitByColumns'
import { v4 as uuidv4 } from 'uuid'
import {
  DEFAULT_COLUMNS_QUANTITY,
  DEFAULT_ITEMS_PER_PAGE,
  DEFAULT_PAGE,
} from '@/utils/constants'
import { Pagination } from '@/components/Pagination/Pagination'
import { SearchParams } from '@/types/SearchParams'
import { Photo } from '@/types/Photo'
import { SearchResponse } from '@/types/SearchResponse'

interface Props {
  searchParams: SearchParams
}
export default async function Home({ searchParams }: Props) {
  const {
    page = DEFAULT_PAGE,
    perPage = DEFAULT_ITEMS_PER_PAGE,
    columns = DEFAULT_COLUMNS_QUANTITY,
    query,
  } = searchParams

  let photosFromResponse: SearchResponse | Photo[] = []

  try {
    photosFromResponse = query
      ? await api.getBySearch(page, perPage, query)
      : await api.getList(page, perPage)
  } catch (error) {
    throw error
  }

  const splitedPhotos = splitByColumns(
    'results' in photosFromResponse
      ? photosFromResponse.results
      : photosFromResponse,
    Number(columns)
  )

  const totalPages =
    'totalPages' in photosFromResponse
      ? Number(photosFromResponse.totalPages)
      : 1000

  return (
    <section
      className={classNames(style.page, {
        [grid.template_three]: columns === '3',
        [grid.template_five]: columns === '5',
      })}
    >
      <div className={style.page__links}>
        <Link
          href={{
            query: { ...searchParams, columns: DEFAULT_COLUMNS_QUANTITY },
          }}
          className={links.link}
          replace={true}
        >
          Three columns per page
        </Link>
        <Link
          href={{ query: { ...searchParams, columns: '5' } }}
          replace={true}
          className={links.link}
        >
          Five columns per page
        </Link>
      </div>
      {splitedPhotos.map((photos) => {
        return (
          <div className={style.page__list} key={uuidv4()}>
            <ImagesList photos={photos} />
          </div>
        )
      })}
      <div className={style.page__pagination}>
        <Pagination
          pages={totalPages}
          currentPage={Number(page)}
          searchParams={searchParams}
        />
      </div>
    </section>
  )
}

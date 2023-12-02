import { client } from '@/utils/fetchClient'
import { PHOTO_END_POINT, SEARCH_END_POINT } from '@/utils/constants'
import { DetailedPhoto } from '@/types/DetailedPhoto'
import { createSearchParams } from '@/utils/createSearchParams'
import { SearchResponse } from '@/types/SearchResponse'
import { Photo } from '@/types/Photo'

/*
 * arguments:
 *  page - Page number to retrieve. (Optional; default: 1)
 *  perPage - Number of items per page. (Optional; default: 10)
 *  orderBy -	How to sort the photos. Optional.
 * */
function getList(page: string, perPage: string) {
  const searchParams = createSearchParams({
    page: Number(page),
    perPage: Number(perPage),
  })

  const url = `${PHOTO_END_POINT}/?${searchParams}`

  return client.get<Photo[]>(url)
}

function getPhoto(id: string) {
  return client.get<DetailedPhoto>(`${PHOTO_END_POINT}/${id}`)
}

function getBySearch(page: string, perPage: string, query: string) {
  const searchParams = createSearchParams({
    page: Number(page),
    perPage: Number(perPage),
    query,
  })

  const url = `${SEARCH_END_POINT + PHOTO_END_POINT}/?${searchParams}`
  console.log(url)

  return client.get<SearchResponse>(url)
}

function getBase(url: string) {
  return client.get<string>(url)
}

export const api = {
  getBase,
  getList,
  getPhoto,
  getBySearch,
}

import { Order } from '@/types/Order'
import { client } from '@/utils/fetchClient'
import { Photo } from '@/types/Photo'
import { PHOTO_END_POINT } from '@/utils/constants'

/*
 * arguments:
 *  page - Page number to retrieve. (Optional; default: 1)
 *  perPage - Number of items per page. (Optional; default: 10)
 *  orderBy -	How to sort the photos. Optional.
 * */
function getList(page?: number, perPage?: number, orderBy?: Order) {
  const options = new URLSearchParams()
  let url = `${PHOTO_END_POINT}`

  if (page) {
    options.append('page', String(page))
  }

  if (perPage) {
    options.append('per_page', String(perPage))
  }

  if (orderBy) {
    options.append('order_by', orderBy)
  }

  if (options.toString()) {
    url += '?' + options.toString
  }

  return client.get<Photo[]>(url)
}

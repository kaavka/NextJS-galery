import { Photo } from '@/types/Photo'

export type SearchResponse = {
  total: number
  total_pages: number
  results: Photo[]
}

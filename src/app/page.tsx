import { photosDefaultUrl } from '@/utils/constants'
import { redirect } from 'next/navigation'

interface Props {
  searchParams: {
    page: string | undefined
    perPage: string | undefined
    columns: string | undefined
    query: string | undefined
  }
}
export default async function Home({ searchParams }: Props) {
  redirect(photosDefaultUrl)
}

import Image from 'next/image'
import { api } from '@/api/unsplash'
import style from './page.module.scss'
import Link from 'next/link'
import { SearchParams } from '@/types/SearchParams'
import { BigImage } from '@/components/BigImage/BigImage'
import { Tag } from '@/components/Tag/Tag'
import { Details } from '@/components/Details/Details'
import { getBase64 } from '@/utils/getBase64'

interface Props {
  params: {
    id: string
  }
  searchParams: SearchParams
}

export default async function Page({ params, searchParams }: Props) {
  const { urls, description, downloads, likes, tags, user, color } =
    await api.getPhoto(params.id)

  const { base64 } = await getBase64(urls.raw)

  const details = {
    downloads,
    likes,
    author: user.name,
    description,
  }

  return (
    <>
      <section className={style.page}>
        <div className={style.page__image}>
          <BigImage
            url={urls.full}
            description={description}
            blurData={base64}
          />
        </div>
        <div className={style.page__details}>
          <Details details={details} />
        </div>
        <article className={style.page__tags}>
          {tags.map(({ title }) => (
            <Tag searchParams={searchParams} title={title} key={title} />
          ))}
        </article>
      </section>
    </>
  )
}

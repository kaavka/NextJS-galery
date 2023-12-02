import style from './PhotoLink.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { Photo } from '@/types/Photo'
import { api } from '@/api/unsplash'

interface Props {
  photo: Photo
}

export async function PhotoLink({ photo }: Props) {
  return (
    <article className={style.photo} id={photo.id} key={photo.id}>
      <Link href={`/photos/${photo.id}`} className={style.photo__link}>
        <Image
          src={photo.urls.small}
          alt={photo.description || 'image'}
          width={100}
          height={100}
          sizes="100vw"
          className={style.photo__link__img}
        />
      </Link>
    </article>
  )
}

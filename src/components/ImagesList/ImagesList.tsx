import { Photo } from '@/types/Photo'
import style from './ImagesList.module.scss'
import { PhotoLink } from '@/components/PhotoLink/PhotoLink'

interface Props {
  photos: Photo[]
}

export function ImagesList({ photos }: Props) {
  return (
    <div className={style.list}>
      {photos.map((photo) => {
        return <PhotoLink photo={photo} key={photo.id} />
      })}
    </div>
  )
}

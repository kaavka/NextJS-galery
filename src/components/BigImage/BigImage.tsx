import style from './BigImage.module.scss'
import Image from 'next/image'
interface Props {
  url: string
  description: string
}

export async function BigImage({ url, description }: Props) {
  return (
    <div className={style.container}>
      <Image
        src={url}
        alt={description}
        width={600}
        height={600}
        sizes="100vw"
        className={style.container__img}
      />
    </div>
  )
}

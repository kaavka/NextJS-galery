import style from './Details.module.scss'
import { capitalize } from '@/utils/capitalize'

interface Props {
  details: { [key: string]: string | number }
}

export function Details({ details }: Props) {
  return (
    <article className={style.details}>
      {Object.entries(details).map(([label, value]) => {
        const capitalizedLabel = capitalize(label)
        if (!value) {
          return
        }

        return (
          <p className={style.details__pair} key={label}>
            <span className={style.details__pair__label}>
              {capitalizedLabel}
            </span>
            <span className={style.details__pair__value}>{value}</span>
          </p>
        )
      })}
    </article>
  )
}

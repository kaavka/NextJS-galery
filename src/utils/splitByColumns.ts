import { Photo } from '@/types/Photo'

export function splitByColumns(photos: Photo[], columns: number) {
  const splited = []
  const itemsPerColumn = Math.ceil(photos.length / columns) // Use Math.ceil to ensure all items are included

  for (let i = 0; i < columns; i++) {
    const start = i * itemsPerColumn
    const end = (i + 1) * itemsPerColumn

    splited.push(photos.slice(start, end))
  }

  return splited
}

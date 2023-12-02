type ExifData = {
  make: string
  model: string
  name: string
  exposure_time: string
  aperture: string
  focal_length: string
  iso: number
}

type LocationData = {
  city: string
  country: string
  position: {
    latitude: number
    longitude: number
  }
}

type Tag = {
  title: string
}

type Collection = {
  id: number
  title: string
  published_at: string
  last_collected_at: string
  updated_at: string
  cover_photo: null | any
  user: null | any
}

type UrlsData = {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

type LinksData = {
  self: string
  html: string
  download: string
  download_location: string
}

type UserData = {
  id: string
  updated_at: string
  username: string
  name: string
  portfolio_url: string
  bio: string
  location: string
  total_likes: number
  total_photos: number
  total_collections: number
  links: {
    self: string
    html: string
    photos: string
    likes: string
    portfolio: string
  }
}

export type DetailedPhoto = {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  downloads: number
  likes: number
  liked_by_user: boolean
  public_domain: boolean
  description: string
  exif: ExifData
  location: LocationData
  tags: Tag[]
  current_user_collections: Collection[]
  urls: UrlsData
  links: LinksData
  user: UserData
}

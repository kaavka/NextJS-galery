export type Photo = {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: string | null
  width: number
  height: number
  color: string
  blur_hash: string
  description: string | null
  alt_description: string
  breadcrumbs: any[]
  urls: Record<string, string>
  links: Record<string, string>
  likes: number
  liked_by_user: boolean
  current_user_collections: any[]
  sponsorship: any
  topic_submissions: Record<string, unknown>
  user: Record<string, unknown>
  tags: any[]
}

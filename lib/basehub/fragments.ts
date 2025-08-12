// Simplified fragments for Sol Incinerator (no longer using BasehHub)
export type AvatarFragment = {
  url: string
  alt: string
  width: number
  height: number
}

export type AuthorFragment = {
  _id: string
  _title: string
  image: AvatarFragment
}

export type DarkLightImageFragment = {
  dark: {
    url: string
    alt: string
    width: number
    height: number
  }
  light: {
    url: string
    alt: string
    width: number
    height: number
  }
}

export type QuoteFragment = {
  _id: string
  author: AuthorFragment
  quote: string
}

export type GeneralEvents = {
  ingestKey: string
}

export type HeaderFragment = {
  navbar: {
    items: Array<{
      _title: string
      href: string
      _id: string
    }>
  }
  rightCtas: {
    items: Array<{
      _id: string
      label: string
      href: string
      type: string
    }>
  }
}

export type HeaderLiksFragment = HeaderFragment["navbar"]["items"][0]

// Mock fragments for compatibility
export const avatarFragment = {}
export const authorFragment = {}
export const buttonFragment = {}
export const headingFragment = {}
export const quoteFragment = {}
export const darkLightImageFragment = {}
export const optimizedImageFragment = {}

export function getArticleSlugFromSlugPath(slugPath: string) {
  return (
    "/" +
    slugPath
      .replace(/(root|site|posts)\s/gm, "")
      .split(/\s/)
      .join("/")
  )
}

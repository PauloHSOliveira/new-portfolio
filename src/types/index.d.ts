import { ReactNode } from 'react'

import { Timestamp } from 'firebase/firestore'

export type Project = {
  name: string
  image: string
  description: string
}

export type Skill = {
  id?: string
  name: string
  icon: ReactNode
}

export interface SkillsProps {
  title: string
  subtitle1: string
  subtitle2: string
  skills1: Skill[]
  skills2: Skill[]
}

export interface Steps {
  id?: string
  text: string
  icon: ReactNode
}

export interface Projects {
  ids: string[]
  entities: Record<string, Project>
}

export interface HeaderProps {
  isBuilding: boolean
  transparent?: boolean
  openMenu?: () => void
  containSearch?: boolean
}

export type LayoutProps = {
  children: ReactNode
  transparentHeader?: boolean
  containFooterInMobile?: boolean
  containSearch?: boolean
}

export type BlogPost = {
  id?: string
  title: string
  description: string
  date: Timestamp
  likes: number
  views: number
  slug: string
  tags: string[]
  categories: string[]
  author: string
  body: string
  timeToRead: number
}

export type ReturnPostDate = {
  id?: string
  title: string
  description: string
  date: string
  likes: number
  views: number
  slug: string
  tags: string[]
  categories: string[]
  author: string
  body: string
  timeToRead: number
}

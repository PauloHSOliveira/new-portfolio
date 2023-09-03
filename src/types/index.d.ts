import { ReactNode } from 'react'

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
}

interface LayoutProps {
  children: ReactNode
  transparentHeader?: boolean
  containFooterInMobile?: boolean
}

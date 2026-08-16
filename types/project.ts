import React from 'react'

export type Tech = {
  name: string
  color?: string
  icon?: React.ReactNode
}

export type Action = {
  label: string
  url?: string
  icon?: React.ReactNode
  type?: 'gradient' | 'outline'
}

export type Project = {
  id: string
  title: string
  description: string
  images: string[]
  mockupBackgroundColor?: string
  technologies: Tech[]
  actions: Action[]
}

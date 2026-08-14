import type { Tech, Action } from '../components/ProjectCard'
import { TECH } from './technologies'

export type Project = {
  id: string
  title: string
  description: string
  images: string[]
  mockupBackgroundColor?: string
  technologies: Tech[]
  actions: Action[]
}

export const projects: Project[] = [
  {
    id: 'azkali',
    title: 'projects.azkali.title',
    description: 'projects.azkali.description',
    images: [
      '/projects/azkali/general.webp',
      '/projects/azkali/ai-mobile-experience.webp',
      '/projects/azkali/product-landing-page.webp',
      '/projects/azkali/ai-and-supabase-backend.webp'
    ],
    mockupBackgroundColor: '#064e3b',
    technologies: [
      TECH.reactNative,
      TECH.expo,
      TECH.nextjs,
      TECH.typescript,
      TECH.tailwind,
      TECH.supabase,
      TECH.postgresql,
      TECH.python,
      TECH.gemini
    ],
    actions: [
      { label: 'actions.watchDemo', url: 'https://www.youtube.com/watch?v=orvfws_kxcc', type: 'gradient' },
      { label: 'actions.goToCode', url: 'https://github.com/chrisssp/azkali', type: 'outline' }
    ]
  },
  {
    id: 'redoc',
    title: 'projects.redoc.title',
    description: 'projects.redoc.description',
    images: [
      '/projects/redoc/Inicio de sesión.png',
      '/projects/redoc/Dashboard - Expedientes.png',
      '/projects/redoc/Modal - Detalles del expediente.png'
    ],
    mockupBackgroundColor: '#0f172a',
    technologies: [
      TECH.nextjs,
      TECH.react,
      TECH.typescript,
      TECH.tailwind,
      TECH.sqlServer,
      TECH.fastapi,
    ],
    actions: [
      { label: 'actions.viewDetails', url: '#', type: 'gradient' },
      { label: 'actions.goToCode', url: 'https://github.com/aleor25/REDOC', type: 'outline' }
    ]
  }
]

export default projects
import type { ReactNode } from 'react'

export type Project = {
  id: string
  title: string
  description: string
  mockupImageUrl: string
  mockupBackgroundColor?: string
  technologies: { name: string; color?: string; icon?: ReactNode }[]
  actions: { label: string; url?: string; icon?: ReactNode; type?: 'gradient' | 'outline' }[]
}

export const projects: Project[] = [
  {
    id: 'azkali',
    title: 'Azkali — Supermarket Landing page',
    description: 'Landing page y experiencia móvil para supermercado, con fichas de producto, hero y flujo de checkout. Implementación responsiva y accesible.',
    mockupImageUrl: '/images/mockups/azkali.jpg',
    mockupBackgroundColor: '#065f46',
    technologies: [
      { name: 'React Native', color: '#61dafb' },
      { name: 'Tailwind CSS', color: '#06b6d4' },
      { name: 'Supabase', color: '#22c55e' },
    ],
    actions: [
      { label: 'View Details', url: '#', type: 'gradient' },
      { label: 'Watch Demo', url: '#', type: 'outline' },
      { label: 'Go to Code', url: '#', type: 'outline' },
    ],
  },
  {
    id: 'redoc',
    title: 'REDOC — Gestión documental',
    description: 'Sistema de gestión documental con vistas duales y modals; backend seguro con FastAPI y frontend en Next.js y Tailwind.',
    mockupImageUrl: '/images/mockups/redoc.jpg',
    mockupBackgroundColor: '#0f172a',
    technologies: [
      { name: 'Next.js', color: '#000' },
      { name: 'FastAPI', color: '#009688' },
      { name: 'PostgreSQL', color: '#336791' },
    ],
    actions: [
      { label: 'View Details', url: '#', type: 'gradient' },
      { label: 'Go to Code', url: '#', type: 'outline' },
    ],
  },
  {
    id: 'dabetai',
    title: 'DabetAI — Microservicios médicos',
    description: 'Plataforma cliente–servidor para gestión de pacientes e integración de ML para detección de retinopatía.',
    mockupImageUrl: '/images/mockups/dabetai.jpg',
    mockupBackgroundColor: '#1f2937',
    technologies: [
      { name: 'FastAPI', color: '#009688' },
      { name: 'Python', color: '#3776ab' },
      { name: 'React Native', color: '#61dafb' },
    ],
    actions: [
      { label: 'View Details', url: '#', type: 'gradient' },
      { label: 'Watch Demo', url: '#', type: 'outline' },
    ],
  },
]

export default projects

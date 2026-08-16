import type { Project } from '@/types/project'
import { TECH } from './technologies'

export const projects: Project[] = [
  {
    id: 'azkali',
    title: 'projects.azkali.title',
    description: 'projects.azkali.description',
    images: [
      '/projects/azkali/general.webp',
      '/projects/azkali/ai-mobile-experience.webp',
      '/projects/azkali/product-landing-page.webp',
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
      { label: 'actions.goToCode', url: 'https://github.com/chrisssp/azkali', type: 'outline' },
      { label: 'actions.goToWebsite', url: 'https://azkali-landing.vercel.app/', type: 'outline' }

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
      { label: 'actions.goToCode', url: 'https://github.com/aleor25/REDOC', type: 'outline' }
    ]
  },
  {
    id: 'dabetai',
    title: 'projects.dabetai.title',
    description: 'projects.dabetai.description',
    images: [
      '/projects/dabetai/landing-page.webp',
      '/projects/dabetai/restful-api.webp',
      '/projects/dabetai/complication-prediction-core-ai.webp',
      '/projects/dabetai/medical-portal-oversight.webp',

    ],
    mockupBackgroundColor: '#0ea5e9',
    technologies: [
      TECH.angular,
      TECH.reactNative,
      TECH.tailwind,
      TECH.postgresql,
      TECH.mongodb,
      TECH.python
    ],
    actions: [
      { label: 'actions.goToWebsite', url: 'https://dabetai.netlify.app/es/', type: 'gradient' },
      { label: 'actions.goToCode', url: 'https://github.com/dabetai-org', type: 'outline' },
      { label: 'actions.readArticle', url: '/projects/dabetai/Prevención-de-Riesgos-de-la-Diabetes-Mediante-una-Plataforma-Inteligente-de-Monitorización-y-Predicción-de-Complicaciones-con-Inteligencia-Artificial.pdf', type: 'outline' }
    ]
  },
  {
    id: 'iapex',
    title: 'projects.iapex.title',
    description: 'projects.iapex.description',
    images: [
      '/projects/iapex/general.webp',
      '/projects/iapex/neural-core.webp',
      '/projects/iapex/the-mobile-client-family-side.webp',
      '/projects/iapex/the-web-portal-institutional-side.webp',
    ],
    mockupBackgroundColor: '#0ea5e9',
    technologies: [
      TECH.angular,
      TECH.react,
      TECH.ionic,
      TECH.springBoot,
      TECH.java,
      TECH.postgresql,
      TECH.mongodb,
      TECH.python
    ],
    actions: [
      { label: 'actions.watchDemo', url: 'https://www.youtube.com/watch?v=WPlo9SK-dgw', type: 'gradient' },
      { label: 'actions.goToCode', url: 'https://github.com/iapex-org', type: 'outline' },
      { label: 'actions.readArticle', url: '/projects/iapex/166-A-Hybrid-Artificial-Intelligent-System-for-Missing.pdf', type: 'outline' }
    ]
  }
]

export default projects
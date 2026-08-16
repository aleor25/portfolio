import type { Tech } from '@/types/project'

import {
  SiGmail,
  SiReact,
  SiExpo,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiGooglegemini
} from 'react-icons/si'

import { TbCopy, TbDownload } from "react-icons/tb";

import { RiLinkedinBoxFill, RiGithubFill, RiCopyrightLine, RiArrowUpSLine } from 'react-icons/ri'


export const TECH: Record<string, Tech> = {
  linkedin: {
    name: 'LinkedIn',
    color: '#0077b5',
    icon: <RiLinkedinBoxFill className="w-12 h-12" />
  },
  github: {
    name: 'GitHub',
    color: '#333',
    icon: <RiGithubFill className="w-11 h-11" />
  },
  gmail: {
    name: 'Gmail',
    color: '#ea4335',
    icon: <SiGmail className="w-6 h-6" />
  },
  copy: {
    name: 'Copy',
    color: '#000',
    icon: <TbCopy className="w-4 h-4" />
  },
  download: {
    name: 'Download',
    color: '#000',
    icon: <TbDownload className="w-6 h-6" />
  },
  arrowUp: {
    name: 'Arrow Up',
    color: '#000',
    icon: <RiArrowUpSLine className="w-6 h-6" />
  },
  copyright: {
    name: 'Copyright',
    color: '#000',
    icon: <RiCopyrightLine className="w-4 h-4" />
  },
  reactNative: {
    name: 'React Native',
    color: '#61dafb',
    icon: <SiReact className="w-4 h-4" />
  },
  react: {
    name: 'React',
    color: '#61dafb',
    icon: <SiReact className="w-4 h-4" />
  },
  expo: {
    name: 'Expo',
    color: '#ffffff',
    icon: <SiExpo className="w-4 h-4" />
  },
  typescript: {
    name: 'TypeScript',
    color: '#3178c6',
    icon: <SiTypescript className="w-4 h-4" />
  },
  supabase: {
    name: 'Supabase',
    color: '#3ecf8e',
    icon: <SiSupabase className="w-4 h-4" />
  },
  tailwind: {
    name: 'Tailwind CSS',
    color: '#38bdf8',
    icon: <SiTailwindcss className="w-4 h-4" />
  },
  postgresql: {
    name: 'PostgreSQL',
    color: '#4169e1',
    icon: <SiPostgresql className="w-4 h-4" />
  },
  sqlServer: {
    name: 'SQL Server',
    color: '#CC292B',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 3.34 2 5v14c0 1.66 4.48 3 10 3s10-1.34 10-3V5c0-1.66-4.48-3-10-3zm0 2c4.42 0 8 1.01 8 2s-3.58 2-8 2-8-1.01-8-2 3.58-2 8-2zm8 5.65c-.88.6-2.52 1.15-4.66 1.45L18.8 14.5c.74-.18 1.42-.4 2-.66v-2.19zm-8 4.35c-4.42 0-8-1.01-8-2v-1.74c1.88.94 4.75 1.51 8 1.51s6.12-.57 8-1.51V12c0 .99-3.58 2-8 2zm0 6c-4.42 0-8-1.01-8-2v-1.74c1.88.94 4.75 1.51 8 1.51s6.12-.57 8-1.51V18c0 .99-3.58 2-8 2z" />
      </svg>
    )
  },
  python: {
    name: 'Python',
    color: '#3776ab',
    icon: <SiPython className="w-4 h-4" />
  },
  nextjs: {
    name: 'Next.js',
    color: '#ffffff',
    icon: <SiNextdotjs className="w-4 h-4" />
  },
  fastapi: {
    name: 'FastAPI',
    color: '#009688',
    icon: <SiFastapi className="w-4 h-4" />
  },
  gemini: {
    name: 'Gemini AI',
    color: '#8b5cf6',
    icon: <SiGooglegemini className="w-4 h-4" />
  },
  zustand: {
    name: 'Zustand',
    color: '#f97316',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C9.243 2 7 4.243 7 7c0 1.284.485 2.454 1.28 3.344C6.082 11.83 4 14.18 4 17c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5 0-2.82-2.082-5.17-4.28-6.656C16.515 9.454 17 8.284 17 7c0-2.757-2.243-5-5-5zm-3.5 5c.828 0 1.5.672 1.5 1.5S9.328 10 8.5 10 7 9.328 7 8.5 7.672 7 8.5 7zm7 0c.828 0 1.5.672 1.5 1.5S16.328 10 15.5 10 14 9.328 14 8.5 14.672 7 15.5 7zm-3.5 4.5c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5z" />
      </svg>
    )
  }
}
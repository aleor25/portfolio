"use client"
import React from "react"

type Tech = {
  name: string
  color?: string
  icon?: React.ReactNode
}

type Action = {
  label: string
  url?: string
  icon?: React.ReactNode
  type?: "gradient" | "outline"
}

type Props = {
  title: string
  description: string
  mockupImageUrl: string
  mockupBackgroundColor?: string
  technologies?: Tech[]
  actions?: Action[]
}

const Icon = {
  ArrowRight: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Eye: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Code: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.5 16.5L3 12l5.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.5 7.5L21 12l-5.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Play: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 3v18l15-9L5 3z" stroke="currentColor" strokeWidth="0" fill="currentColor"/>
    </svg>
  ),
  DefaultTech: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.2"/>
    </svg>
  )
}

export default function ProjectCard({
  title,
  description,
  mockupImageUrl,
  mockupBackgroundColor = "#064e3b",
  technologies = [],
  actions = [],
}: Props) {
  return (
    <article className="w-full max-w-4xl mx-auto rounded-2xl bg-[#121212] overflow-hidden shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 items-stretch">
        {/* Mockup area */}
        <div className="flex items-center justify-center rounded-lg overflow-hidden" style={{ background: mockupBackgroundColor }}>
          <div className="relative p-6 w-full max-w-md">
            <div className="mx-auto rounded-xl bg-black/20 p-3 shadow-inner" style={{ borderRadius: 16 }}>
              <div className="relative rounded-md overflow-hidden" style={{ paddingTop: '56%' }}>
                <img src={mockupImageUrl} alt={`${title} mockup`} className="absolute inset-0 w-full h-full object-cover"/>
              </div>
            </div>
            {/* Carousel dots */}
            <div className="mt-4 flex justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/90" />
              <span className="w-2 h-2 rounded-full bg-white/50" />
              <span className="w-2 h-2 rounded-full bg-white/30" />
            </div>
          </div>
        </div>

        {/* Details area */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white text-left">{title}</h3>
            <p className="mt-3 text-sm text-gray-300 text-left leading-relaxed">{description}</p>

            {/* Technologies badges */}
            <div className="mt-5 flex flex-wrap gap-3">
              {technologies.map((tech) => (
                <div key={tech.name} className="flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium" style={{ background: tech.color ?? 'rgba(255,255,255,0.03)', color: tech.color ? '#fff' : '#e5e7eb' }}>
                  <span className="w-4 h-4 inline-flex items-center justify-center text-white/90">
                    {tech.icon ?? Icon.DefaultTech}
                  </span>
                  <span className="ml-1">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            {actions.map((a) => (
              <a key={a.label} href={a.url ?? '#'} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 ${a.type === 'gradient' ? 'bg-gradient-to-r from-sky-400 to-teal-400 text-black shadow-md' : 'border border-neutral-700 text-gray-100 bg-transparent'}`}>
                <span className="inline-flex items-center justify-center text-current">{a.icon ?? Icon.ArrowRight}</span>
                <span>{a.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

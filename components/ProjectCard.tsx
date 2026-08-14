"use client"
import React, { useState } from 'react'
import { useTranslation } from '../lib/i18n'

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

export type Props = {
  title: string
  description: string
  images: string[]
  mockupBackgroundColor?: string
  technologies?: Tech[]
  actions?: Action[]
}

const Icon = {
  ArrowRight: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  ChevronLeft: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  ChevronRight: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}

export default function ProjectCard({
  title,
  description,
  images = [],
  mockupBackgroundColor = '#064e3b',
  technologies = [],
  actions = []
}: Props) {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  const currentImage = images.length > 0 ? images[currentIndex] : ''

  const translatedTitle = title.startsWith('projects.') ? t(title) : title
  const translatedDescription = description.startsWith('projects.') ? t(description) : description

  return (
    <article className="w-full mx-auto mb-24 last:mb-0">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <div
          className="w-full lg:w-1/2 relative flex flex-col items-center justify-center rounded-2xl overflow-hidden pt-3 px-3 pb-12 lg:pt-4 lg:px-4 lg:pb-14 min-h-[350px] group shadow-2xl"
          style={{ backgroundColor: mockupBackgroundColor }}
        >
          <img
            src={currentImage}
            alt={t('projectCard.imageOf', { current: currentIndex + 1, title: translatedTitle })}
            className="w-full h-auto object-contain rounded-lg shadow-xl transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
            onError={(e) => {
              ;(e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Image+not+found'
            }}
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
                aria-label={t('projectCard.previousImage')}
              >
                {Icon.ChevronLeft}
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm"
                aria-label={t('projectCard.nextImage')}
              >
                {Icon.ChevronRight}
              </button>

              <div className="absolute bottom-4 flex justify-center gap-2.5 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={t('projectCard.goToImage', { index: index + 1 })}
                    className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${index === currentIndex ? 'w-7 bg-white' : 'w-2 bg-white/40 hover:bg-white/80'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h3 className="text-4xl font-extrabold text-white mb-5 tracking-tight">{translatedTitle}</h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">{translatedDescription}</p>

          <div className="flex flex-wrap gap-3 mb-10">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105"
                style={{
                  color: tech.color || '#f3f4f6',
                  borderColor: tech.color ? `${tech.color}40` : '#374151',
                  backgroundColor: tech.color ? `${tech.color}15` : 'transparent'
                }}
              >
                {tech.icon && (
                  <span className="w-4 h-4 flex items-center justify-center shrink-0">
                    {tech.icon}
                  </span>
                )}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-2">
            {actions.map((a) => {
              const isPrimary = a.type === 'gradient'
              const actionLabel = a.label.startsWith('actions.') ? t(a.label) : a.label

              return (
                <a
                  key={actionLabel}
                  href={a.url ?? '#'}
                  target="_blank"
                  rel="noreferrer"
                  className={`group inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 ${isPrimary ? 'bg-sky-500 text-neutral-950 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]' : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20'}`}
                >
                  {a.icon && (
                    <span className="flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
                      {a.icon}
                    </span>
                  )}

                  <span>{actionLabel}</span>

                  {!a.icon && (
                    <span className="flex items-center justify-center transition-transform group-hover:translate-x-1">
                      {Icon.ArrowRight}
                    </span>
                  )}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
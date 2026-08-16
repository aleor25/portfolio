"use client"
import React, { useState } from 'react'
import type { Action, Tech } from '@/types/project'
import { useTranslation } from '@/lib/i18n'
import TechBadge from '@/components/atoms/TechBadge'
import ProjectCarousel from '@/components/molecules/ProjectCarousel'
import ProjectActions from '@/components/molecules/ProjectActions'

type Props = {
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
                    <ProjectCarousel
                        images={images}
                        currentIndex={currentIndex}
                        translatedTitle={translatedTitle}
                        currentImage={currentImage}
                        onPrev={prevSlide}
                        onNext={nextSlide}
                        onGoTo={setCurrentIndex}
                        icons={{ ChevronLeft: Icon.ChevronLeft, ChevronRight: Icon.ChevronRight }}
                    />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h3 className="text-4xl font-extrabold text-white mb-5 tracking-tight">{translatedTitle}</h3>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">{translatedDescription}</p>

                    <div className="flex flex-wrap gap-3 mb-10">
                        {technologies.map((tech) => (
                            <TechBadge key={tech.name} tech={tech} />
                        ))}
                    </div>

                    <ProjectActions actions={actions} arrowRightIcon={Icon.ArrowRight} />
                </div>
            </div>
        </article>
    )
}

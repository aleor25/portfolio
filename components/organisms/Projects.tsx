"use client"
import React from 'react'
import { useTranslation } from '@/lib/i18n'
import ProjectCard from '@/components/organisms/ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
    const { t } = useTranslation()

    return (
        <section id="proyectos" className="max-w-6xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">{t('projects.title')}</h2>
            <div className="flex flex-col gap-8">
                {projects.map((p) => (
                    <ProjectCard
                        key={p.id}
                        title={p.title}
                        description={p.description}
                        images={p.images}
                        mockupBackgroundColor={p.mockupBackgroundColor}
                        technologies={p.technologies}
                        actions={p.actions}
                    />
                ))}
            </div>
        </section>
    )
}
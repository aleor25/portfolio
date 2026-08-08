"use client"
import React from "react"
import ProjectCard from "./ProjectCard"
import Header from "./Header"

const exampleTechnologies = [
    { name: 'React Native', color: '#61dafb' },
    { name: 'Supabase', color: '#22c55e' },
    { name: 'Tailwind CSS', color: '#06b6d4' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Python', color: '#3776ab' },
    { name: 'Gemini AI', color: '#7c3aed' },
]

const exampleActions = [
    { label: 'View Details', url: '#', type: 'gradient', icon: undefined },
    { label: 'Watch Demo', url: '#', type: 'outline', icon: undefined },
    { label: 'Go to Code', url: '#', type: 'outline', icon: undefined },
]

export default function ProjectCardExample() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <Header />
            <main className="py-12 px-4">
                <section id="proyectos" className="space-y-6">
                    <ProjectCard
                        title="Azkali — Supermarket Landing page"
                        description={'Landing page para un supermercado con fichas de productos, hero, y flujo de checkout. Diseño moderno y responsivo inspirado en referencias visuales.'}
                        mockupImageUrl="/images/example-mockup.jpg"
                        mockupBackgroundColor="#064e3b"
                        technologies={exampleTechnologies}
                        actions={exampleActions}
                    />
                </section>
            </main>
        </div>
    )
}

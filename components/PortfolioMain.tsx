"use client"
import React from 'react'
import Header from './Header'
import ProjectsSection from './ProjectsSection'
import { useTranslation } from '../lib/i18n'

export default function PortfolioMain() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <Header />

      <main className="py-12">
        <section id="sobre-mi" className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">{t('profile.title')}</h1>
          <p className="text-gray-300 whitespace-pre-line">{t('profile.description')}</p>

          <h3 className="mt-6 text-2xl font-semibold">Habilidades Técnicas</h3>
          <ul className="mt-3 text-gray-300 list-disc list-inside space-y-2">
            <li><strong>Backend:</strong> Java (Spring Boot, MVC, Apache Struts), FastAPI, Node.js, JWT, Bcrypt, RBAC, APIs REST, SOAP.</li>
            <li><strong>Frontend:</strong> React, Next.js, Angular, Tailwind CSS, CSS3, Figma, HTML5, JavaScript.</li>
            <li><strong>Bases de Datos:</strong> SQL Server, PostgreSQL, MySQL, MongoDB.</li>
            <li><strong>Herramientas y SO:</strong> Git, Postman, Docker, Linux, VS Code, Eclipse, Android Studio.</li>
          </ul>

          <h3 className="mt-6 text-2xl font-semibold">Experiencia Profesional (resumen)</h3>
          <p className="mt-3 text-gray-300">He trabajado en roles de Frontend, Backend y Full-Stack en proyectos empresariales, modernización de sistemas heredados, integración de ML y plataformas e-commerce.</p>
        </section>

        <ProjectsSection />

        <section id="experiencia" className="max-w-4xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold">Experiencia profesional</h2>
          <p className="mt-3 text-gray-300">Ver CV detallado o contactar para más información.</p>
        </section>
      </main>
    </div>
  )
}

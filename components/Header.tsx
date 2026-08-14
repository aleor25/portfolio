"use client"
import React, { useState, useEffect } from 'react'
import { useTranslation } from '../lib/i18n'

export default function Header() {
  const { t, locale, setLocale } = useTranslation()
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const sectionIds = ['experiencia', 'proyectos', 'sobre-mi']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { id: 'experiencia', label: t('header.experiencia'), minWidth: 'min-w-[135px]' },
    { id: 'proyectos', label: t('header.proyectos'), minWidth: 'min-w-[120px]' },
    { id: 'sobre-mi', label: t('header.sobreMi'), minWidth: 'min-w-[120px]' }
  ]

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/40 border-b border-white/10">
      {/* Contenedor universal alineado */}
      <div className="max-w-6xl mx-auto w-full px-6 lg:px-12 py-5 flex justify-between items-center">
        <div className="text-sky-400 font-mono font-bold text-lg tracking-tight">
          &lt;<span className="text-white">aleor25</span>/&gt;
        </div>

        <div className="flex items-center gap-5">
          <nav className="bg-neutral-900/80 border border-white/10 rounded-2xl px-2.5 py-2 backdrop-blur-md shadow-lg hidden md:block">
            <ul className="flex items-center gap-1.5 text-base font-bold">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className={`px-5 py-2 rounded-xl transition-all duration-300 block text-center ${item.minWidth} ${isActive ? 'text-sky-400 bg-sky-500/10 font-bold shadow-[0_0_16px_rgba(56,189,248,0.35)]' : 'text-gray-300 hover:text-white hover:bg-white/5 font-semibold'}`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className="bg-neutral-900/80 border border-white/10 rounded-2xl px-2 py-2 flex items-center shadow-lg">
            <button
              onClick={() => setLocale('es')}
              className={`px-4 py-2 text-base font-bold rounded-xl transition-all duration-300 ${locale === 'es' ? 'bg-white text-black shadow-md font-extrabold' : 'text-gray-400 hover:text-white'}`}
            >
              ES
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-4 py-2 text-base font-bold rounded-xl transition-all duration-300 ${locale === 'en' ? 'bg-white text-black shadow-md font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
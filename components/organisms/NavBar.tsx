"use client"
import React from 'react'
import { useTranslation } from '@/lib/i18n'

export default function Navbar() {
    const { t, locale, setLocale } = useTranslation()

    const navItems = [
        { id: 'experiencia', label: t('header.experiencia') },
        { id: 'proyectos', label: t('header.proyectos') },
        { id: 'sobre-mi', label: t('header.sobreMi') }
    ]

    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#121212]/70 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">

                {/* Logo / Nombre */}
                <div className="text-sky-400 font-mono font-bold text-lg tracking-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    &lt;<span className="text-white">aleor25</span>/&gt;
                </div>

                {/* Navegación Desktop y Switcher de Idioma */}
                <div className="flex items-center gap-6">
                    <nav className="hidden md:block bg-neutral-900/80 border border-white/10 rounded-2xl px-2 py-1.5 shadow-lg">
                        <ul className="flex items-center gap-1">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <a
                                        href={`#${item.id}`}
                                        className="px-4 py-2 rounded-xl transition-all duration-300 text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 inline-block"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Botones de Idioma */}
                    <div className="bg-neutral-900/80 border border-white/10 rounded-2xl p-1 flex items-center shadow-lg">
                        <button
                            onClick={() => setLocale('es')}
                            className={`px-3 py-1.5 text-sm font-bold rounded-xl transition-all duration-300 ${locale === 'es' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            ES
                        </button>
                        <button
                            onClick={() => setLocale('en')}
                            className={`px-3 py-1.5 text-sm font-bold rounded-xl transition-all duration-300 ${locale === 'en' ? 'bg-white text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
                        >
                            EN
                        </button>
                    </div>
                </div>

            </div>
        </header>
    )
}
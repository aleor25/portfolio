"use client"
import Link from "next/link"
import React from "react"
import { useTranslation } from "../lib/i18n"

export default function Header() {
  const { t, locale, setLocale } = useTranslation()

  return (
    <header className="sticky top-0 z-50 w-full bg-black/40 backdrop-blur-sm border-b border-black/20">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white font-semibold">{t('header.title')}</div>
        <div className="flex items-center gap-6">
          <ul className="flex gap-6 text-sm text-gray-200">
            <li>
              <a href="#experiencia" className="hover:text-white">{t('header.experiencia')}</a>
            </li>
            <li>
              <a href="#proyectos" className="hover:text-white">{t('header.proyectos')}</a>
            </li>
            <li>
              <a href="#sobre-mi" className="hover:text-white">{t('header.sobreMi')}</a>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button onClick={() => setLocale('es')} className={`px-2 py-1 rounded ${locale === 'es' ? 'bg-white text-black' : 'text-gray-200'}`}>ES</button>
            <button onClick={() => setLocale('en')} className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-white text-black' : 'text-gray-200'}`}>EN</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

"use client"
import React, { useState } from 'react'
import { useTranslation } from '../lib/i18n'

export default function PortfolioMain() {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)
  const email = 'alex03ortizperez@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    // Contenedor universal alineado
    <section id="sobre-mi" className="max-w-6xl mx-auto w-full px-6 lg:px-12 py-12">
      <h1 className="text-6xl font-bold mb-4 text-white">{t('profile.name')}</h1>
      <p className="text-3xl text-sky-400 whitespace-pre-line mb-8 font-semibold">{t('profile.role')}</p>

      <div className="flex flex-wrap items-center gap-6">

        {/* GitHub */}
        <a
          href="https://github.com/aleor25"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label={t('profile.social.github')}
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/aleor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label={t('profile.social.linkedin')}
        >
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </a>

        {/* Botón de Copiar Email */}
        <div className="relative flex items-center">
          <button
            onClick={handleCopyEmail}
            className="flex items-center gap-3 bg-neutral-900/90 border border-white/10 hover:border-white/20 text-gray-200 hover:text-white px-5 h-12 rounded-2xl text-base font-mono transition-all duration-300 group shadow-lg focus:outline-none"
            title={t('profile.copyEmail')}
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z" />
            </svg>
            <span className="font-medium tracking-tight">{email}</span>
            {copied ? (
              <svg className="w-5 h-5 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>

          <span
            className={`absolute -top-11 left-1/2 -translate-x-1/2 bg-neutral-800 border border-white/10 text-sky-400 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            {t('profile.copied')}
          </span>
        </div>

        {/* Botón de Descarga CV */}
        <a
          href="/cv/Alejandro_Ortiz_Pérez_CV_Desarrollador_FullStack.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download
          className="flex items-center gap-2.5 px-6 h-12 rounded-2xl bg-sky-500 text-neutral-950 font-bold hover:bg-sky-400 transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] active:scale-95"
          aria-label="Descargar Curriculum Vitae"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Curriculum</span>
        </a>

      </div>
    </section>
  )
}
"use client"
import React from 'react'
import { TECH } from '@/data/technologies'
import SocialLinks from '@/components/molecules/SocialLinks'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full border-t border-neutral-200 dark:border-white/10 mt-24 py-10 bg-slate-50 dark:bg-[#121212] transition-colors duration-300">
            <div className="max-w-6xl mx-auto w-full px-6 lg:px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="inline-flex items-center justify-center md:justify-start gap-1.5 text-neutral-600 dark:text-gray-300 font-medium text-sm">
                        <span className="shrink-0 flex items-center justify-center">{TECH.copyright.icon}</span>
                        <span>{currentYear} Alejandro Ortiz.</span>
                    </p>
                    <p className="text-neutral-500 dark:text-gray-500 text-sm mt-1">Ingeniería en Desarrollo y Gestión de Software</p>
                </div>

                <div className="flex items-center gap-5" aria-label="Social links">
                    <SocialLinks />
                </div>
            </div>
        </footer>
    )
}
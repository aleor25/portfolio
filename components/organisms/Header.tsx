"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/i18n'
import HeaderNavigation from '@/components/molecules/HeaderNavigation'
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher'
import ThemeToggle from '@/components/atoms/ThemeToggle'

export default function Header() {
    const { t, locale, setLocale } = useTranslation()
    const [activeSection, setActiveSection] = useState<string>('')

    useEffect(() => {
        const sectionIds = ['sobre-mi', 'proyectos', 'experiencia']

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
        { id: 'sobre-mi', label: t('header.sobreMi'), minWidth: 'min-w-[120px]' },
        { id: 'proyectos', label: t('header.proyectos'), minWidth: 'min-w-[120px]' },
        { id: 'experiencia', label: t('header.experiencia'), minWidth: 'min-w-[135px]' }
    ]

    return (
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/60 dark:bg-black/40 border-b border-neutral-200 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-6 lg:px-4 py-4 flex justify-between items-center">
                <div className="text-sky-500 dark:text-sky-400 font-mono font-bold text-lg tracking-tight">
                    &lt;<span className="text-neutral-900 dark:text-white">aleor25</span>/&gt;
                </div>

                <div className="flex items-center gap-8 md:gap-12">
                    <HeaderNavigation navItems={navItems} activeSection={activeSection} />

                    <div className="flex items-center gap-2">
                        <LanguageSwitcher
                            locale={locale}
                            onChangeLocale={(value) => setLocale(value)}
                        />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}
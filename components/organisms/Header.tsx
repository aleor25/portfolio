"use client"
import React, { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/i18n'
import HeaderNavigation from '@/components/molecules/HeaderNavigation'
import LanguageSwitcher from '@/components/molecules/LanguageSwitcher'

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
        <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-black/40 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 lg:px-4 py-4 flex justify-between items-center">
                <div className="text-sky-400 font-mono font-bold text-lg tracking-tight">
                    &lt;<span className="text-white">aleor25</span>/&gt;
                </div>

                <div className="flex items-center gap-5">
                    <HeaderNavigation navItems={navItems} activeSection={activeSection} />
                    <LanguageSwitcher
                        locale={locale}
                        onChangeLocale={(value) => setLocale(value)}
                    />
                </div>
            </div>
        </header>
    )
}

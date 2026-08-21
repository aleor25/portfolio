"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '@/lib/i18n'
import { TECH } from '@/data/technologies'
import SocialLinks from '@/components/molecules/SocialLinks'

export default function AboutMe() {
    const { t } = useTranslation()
    const [copied, setCopied] = useState(false)
    const email = 'alex03ortizperez@gmail.com'

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <section id="sobre-mi" className="max-w-6xl mx-auto w-full px-6 lg:px-4 py-12">
            <div className="flex flex-col-reverse md:flex-row items-stretch justify-between gap-10 lg:gap-14">
                <div className="flex-1 flex flex-col justify-between items-start">
                    <div className="mb-8 w-full max-w-2xl">
                        <h1 className="text-6xl font-bold mb-4 text-neutral-900 dark:text-white tracking-tight">{t('profile.name')}</h1>
                        <p className="text-3xl text-sky-600 dark:text-sky-400 whitespace-pre-line mb-6 font-semibold">{t('profile.role')}</p>
                        <p className="text-neutral-600 dark:text-gray-400 text-lg leading-relaxed">{t('profile.description')}</p>
                    </div>

                    <div className="flex flex-col gap-6 w-full">
                        <div className="flex flex-wrap items-center gap-6">
                            <SocialLinks size="large" />

                            <div className="relative flex items-center">
                                <button
                                    onClick={handleCopyEmail}
                                    className="flex items-center gap-3 bg-white dark:bg-neutral-900/90 border border-neutral-200 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 text-neutral-700 dark:text-gray-200 hover:text-black dark:hover:text-white px-5 h-12 rounded-2xl text-base font-mono transition-all duration-300 group shadow-lg focus:outline-none cursor-pointer"
                                    title={t('profile.copyEmail')}
                                >
                                    {TECH.gmail.icon}
                                    <span className="font-medium tracking-tight">{email}</span>
                                    {copied ? (
                                        <svg className="w-5 h-5 text-sky-500 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    ) : (
                                        <span className="w-5 h-5 flex items-center justify-center text-neutral-400 dark:text-gray-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors [&>svg]:w-full [&>svg]:h-full">
                                            {TECH.copy.icon}
                                        </span>
                                    )}
                                </button>

                                <span
                                    className={`absolute -top-11 left-1/2 -translate-x-1/2 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-white/10 text-sky-600 dark:text-sky-400 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap ${copied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
                                >
                                    {t('profile.copied')}
                                </span>
                            </div>
                        </div>

                        <div>
                            <a
                                href={t("profile.cvFile")}
                                target="_blank"
                                rel="noopener noreferrer"
                                download={t("profile.cvDownloadName")}
                                className="inline-flex items-center gap-2.5 px-6 h-12 rounded-2xl bg-sky-500 text-neutral-950 font-bold hover:bg-sky-400 transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] active:scale-95"
                                aria-label="Descargar Curriculum Vitae"
                            >
                                {TECH.download.icon}
                                <span>{t("profile.downloadCv")}</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="shrink-0 flex items-center justify-center">
                    <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden border-2 border-neutral-200 dark:border-white/10 p-1.5 bg-white dark:bg-neutral-900/60 shadow-xl dark:shadow-2xl">
                        <div className="relative w-full h-full rounded-[1.25rem] overflow-hidden">
                            <Image
                                src="https://github.com/aleor25.png?size=2160"
                                alt="Foto de perfil de Alejandro Ortiz"
                                fill
                                priority
                                quality={100}
                                sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
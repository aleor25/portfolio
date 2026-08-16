"use client"
import { TECH } from '@/data/technologies'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme()

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="h-12 px-3.5 py-2 flex items-center justify-center rounded-2xl bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 text-neutral-600 dark:text-gray-400 hover:text-black dark:hover:text-white shadow-lg transition-all duration-300"
            aria-label="Cambiar tema"
        >
            {resolvedTheme === 'dark' ? (
                <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    {TECH.lightMode?.icon}
                </span>
            ) : (
                <span className="w-5 h-5 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                    {TECH.darkMode?.icon}
                </span>
            )}
        </button>
    )
}
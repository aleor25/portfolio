"use client"
import { TECH } from '@/data/technologies'
import React, { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className={`fixed bottom-8 right-8 p-3.5 rounded-full bg-sky-500 text-neutral-950 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all duration-300 z-50 ${isVisible
                    ? 'opacity-100 translate-y-0 pointer-events-auto scale-100'
                    : 'opacity-0 translate-y-10 pointer-events-none scale-90'
                }`}
        >
            {TECH.arrowUp.icon}
        </button>
    )
}
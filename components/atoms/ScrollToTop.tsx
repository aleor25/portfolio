"use client"
import { TECH } from '@/data/technologies'
import React, { useState, useEffect } from 'react'

export default function ScrollToTop() {
    const [atBottom, setAtBottom] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80
            setAtBottom(isBottom)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
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
            className={`fixed right-8 p-3.5 rounded-full bg-sky-500 text-neutral-950 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.6)] transition-all duration-300 z-50 
                ${atBottom ? 'bottom-24' : 'bottom-6'
                }`}
        >
            {TECH.arrowUp.icon}
        </button>
    )
}
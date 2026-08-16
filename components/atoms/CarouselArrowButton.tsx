import type { ReactNode } from 'react'

type CarouselArrowButtonProps = {
    onClick: () => void
    ariaLabel: string
    icon: ReactNode
    direction: 'left' | 'right'
}

export default function CarouselArrowButton({ onClick, ariaLabel, icon, direction }: CarouselArrowButtonProps) {
    const positionClass = direction === 'left' ? 'left-3' : 'right-3'

    return (
        <button
            onClick={onClick}
            className={`absolute ${positionClass} top-1/2 -translate-y-1/2 p-2 bg-black/40 hover:bg-black/80 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 backdrop-blur-sm`}
            aria-label={ariaLabel}
        >
            {icon}
        </button>
    )
}

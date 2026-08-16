type CarouselDotButtonProps = {
    onClick: () => void
    ariaLabel: string
    isActive: boolean
}

export default function CarouselDotButton({ onClick, ariaLabel, isActive }: CarouselDotButtonProps) {
    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${isActive ? 'w-7 bg-white' : 'w-2 bg-white/40 hover:bg-white/80'}`}
        />
    )
}

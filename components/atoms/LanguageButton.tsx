type LanguageButtonProps = {
    label: string
    isActive: boolean
    onClick: () => void
}

export default function LanguageButton({ label, isActive, onClick }: LanguageButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1 text-base font-bold rounded-xl transition-all duration-300 ${isActive ? 'bg-white text-black shadow-md font-bold' : 'text-gray-400 hover:text-white'}`}
        >
            {label}
        </button>
    )
}

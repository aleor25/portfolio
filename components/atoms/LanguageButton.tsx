type LanguageButtonProps = {
    label: string
    isActive: boolean
    onClick: () => void
}

export default function LanguageButton({ label, isActive, onClick }: LanguageButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`px-3 py-1.5 text-sm font-bold rounded-xl transition-all duration-300 ${isActive
                    ? 'bg-neutral-900 dark:bg-white text-white dark:text-black shadow-md'
                    : 'text-neutral-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
                }`}
        >
            {label}
        </button>
    )
}

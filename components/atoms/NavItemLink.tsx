type NavItemLinkProps = {
    href: string
    label: string
    minWidth: string
    isActive: boolean
}

export default function NavItemLink({ href, label, isActive }: NavItemLinkProps) {
    return (
        <a
            href={href}
            className={`px-4 py-2 rounded-xl transition-all duration-300 block text-center text-sm ${isActive
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-100 dark:bg-sky-500/10 font-bold shadow-sm dark:shadow-[0_0_16px_rgba(56,189,248,0.35)]'
                    : 'text-neutral-600 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/5 font-semibold'
                }`}
        >
            {label}
        </a>
    )
}

type NavItemLinkProps = {
    href: string
    label: string
    minWidth: string
    isActive: boolean
}

export default function NavItemLink({ href, label, minWidth, isActive }: NavItemLinkProps) {
    return (
        <a
            href={href}
            className={`px-5 py-1 rounded-xl transition-all duration-300 block text-center ${minWidth} ${isActive ? 'text-sky-400 font-bold': 'text-gray-300 hover:text-white hover:bg-white/5 font-semibold'}`}
        >
            {label}
        </a>
    )
}

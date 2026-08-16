import NavItemLink from "../atoms/NavItemLink"

type NavItem = {
    id: string
    label: string
    minWidth: string
}

type HeaderNavigationProps = {
    navItems: NavItem[]
    activeSection: string
}

export default function HeaderNavigation({ navItems, activeSection }: HeaderNavigationProps) {
    return (
        <nav className="h-12 hidden md:block bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 rounded-2xl px-2 py-1.5 backdrop-blur-md shadow-lg transition-colors duration-300">
            <ul className="flex items-center gap-1 text-sm font-semibold">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <NavItemLink
                            href={`#${item.id}`}
                            label={item.label}
                            minWidth={item.minWidth}
                            isActive={activeSection === item.id}
                        />
                    </li>
                ))}
            </ul>
        </nav>
    )
}


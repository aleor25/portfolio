import NavItemLink from '@/components/atoms/NavItemLink'

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
        <nav className="bg-neutral-900/80 border border-white/10 rounded-2xl px-2.5 py-2 backdrop-blur-md shadow-lg hidden md:block">
            <ul className="flex items-center gap-1.5 text-base font-bold">
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

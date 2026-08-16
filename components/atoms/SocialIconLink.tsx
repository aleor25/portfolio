import type { ReactNode } from 'react'

type SocialIconLinkProps = {
    href: string
    ariaLabel: string
    icon: ReactNode
    className: string
    target?: '_blank' | '_self'
    rel?: string
}

export default function SocialIconLink({ href, ariaLabel, icon, className, target = '_blank', rel = 'noopener noreferrer' }: SocialIconLinkProps) {
    return (
        <a href={href} target={target} rel={rel} className={className} aria-label={ariaLabel}>
            {icon}
        </a>
    )
}

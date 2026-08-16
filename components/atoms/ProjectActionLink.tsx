import type { Action } from '@/types/project'
import type { ReactNode } from 'react'

type ProjectActionLinkProps = {
    action: Action
    label: string
    fallbackIcon: ReactNode
}

export default function ProjectActionLink({ action, label, fallbackIcon }: ProjectActionLinkProps) {
    const isPrimary = action.type === 'gradient'

    return (
        <a
            href={action.url ?? '#'}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center justify-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 active:scale-95 ${isPrimary
                    ? 'bg-sky-500 text-neutral-950 shadow-[0_0_15px_rgba(14,165,233,0.3)] hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(14,165,233,0.5)]'
                    : 'bg-neutral-100 dark:bg-white/5 text-neutral-700 dark:text-gray-300 border border-neutral-300 dark:border-white/10 hover:bg-neutral-200 dark:hover:bg-white/10 hover:text-black dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/20'
                }`}
        >
            {action.icon && (
                <span className="flex items-center justify-center transition-transform group-hover:-translate-y-0.5">
                    {action.icon}
                </span>
            )}

            <span>{label}</span>

            {!action.icon && (
                <span className="flex items-center justify-center transition-transform group-hover:translate-x-1">
                    {fallbackIcon}
                </span>
            )}
        </a>
    )
}
import type { Tech } from '@/types/project'

type TechBadgeProps = {
    tech: Tech
}

export default function TechBadge({ tech }: TechBadgeProps) {
    return (
        <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold border transition-all duration-300 hover:scale-105"
            style={{
                color: tech.color || '#f3f4f6',
                borderColor: tech.color ? `${tech.color}40` : '#374151',
                backgroundColor: tech.color ? `${tech.color}15` : 'transparent'
            }}
        >
            {tech.icon && <span className="w-4 h-4 flex items-center justify-center shrink-0">{tech.icon}</span>}
            <span>{tech.name}</span>
        </div>
    )
}

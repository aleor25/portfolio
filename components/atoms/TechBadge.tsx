import type { Tech } from '@/types/project'

type TechBadgeProps = {
    tech: Tech
}

export default function TechBadge({ tech }: TechBadgeProps) {
    const isLightOrWhite =
        !tech.color ||
        tech.color === '#ffffff' ||
        tech.color === '#fff' ||
        tech.color.toLowerCase() === '#ededed'

    const badgeBg = isLightOrWhite ? '#1e293b' : tech.color

    return (
        <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-shadow-md font-semibold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md border border-white/10 dark:border-white/10"
            style={{
                backgroundColor: badgeBg,
            }}
        >
            {tech.icon && (
                <span className="w-5 h-5 flex items-center justify-center text-white">
                    {tech.icon}
                </span>
            )}
            <span>{tech.name}</span>
        </div>
    )
}
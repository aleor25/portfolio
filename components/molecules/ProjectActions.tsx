import ProjectActionLink from '@/components/atoms/ProjectActionLink'
import type { Action } from '@/types/project'
import { useTranslation } from '@/lib/i18n'

type ProjectActionsProps = {
    actions: Action[]
    arrowRightIcon: React.ReactNode
}

export default function ProjectActions({ actions, arrowRightIcon }: ProjectActionsProps) {
    const { t } = useTranslation()

    return (
        <div className="flex flex-wrap items-center gap-4 mt-2">
            {actions.map((action) => {
                const actionLabel = action.label.startsWith('actions.') ? t(action.label) : action.label

                return (
                    <ProjectActionLink
                        key={actionLabel}
                        action={action}
                        label={actionLabel}
                        fallbackIcon={arrowRightIcon}
                    />
                )
            })}
        </div>
    )
}

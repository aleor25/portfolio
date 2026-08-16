import SocialIconLink from '@/components/atoms/SocialIconLink'
import { TECH } from '@/data/technologies'

type SocialLinksProps = {
    size?: 'default' | 'large'
}

export default function SocialLinks({ size = 'default' }: SocialLinksProps) {
    const baseClass = size === 'large'
        ? 'text-neutral-500 dark:text-gray-400 transition-all duration-300 hover:scale-110 flex items-center justify-center'
        : 'transition-colors duration-300'

    return (
        <>
            <SocialIconLink
                href="https://github.com/aleor25"
                ariaLabel="GitHub"
                icon={TECH.github.icon}
                className={`${baseClass} ${size === 'large' ? 'hover:text-black dark:hover:text-white' : 'text-neutral-500 dark:text-gray-500 hover:text-black dark:hover:text-white'}`}
            />
            <SocialIconLink
                href="https://linkedin.com/in/aleor"
                ariaLabel="LinkedIn"
                icon={TECH.linkedin.icon}
                className={`${baseClass} ${size === 'large' ? 'hover:text-[#0A66C2] dark:hover:text-blue-500' : 'text-neutral-500 dark:text-gray-500 hover:text-[#0A66C2] dark:hover:text-blue-500'}`}
            />
            {size !== 'large' && (
                <SocialIconLink
                    href="mailto:alex03ortizperez@gmail.com"
                    ariaLabel="Email"
                    icon={TECH.gmail.icon}
                    className={`${baseClass} text-neutral-500 dark:text-gray-500 hover:text-[#EA4335] dark:hover:text-red-500`}
                    target="_self"
                    rel=""
                />
            )}
        </>
    )
}
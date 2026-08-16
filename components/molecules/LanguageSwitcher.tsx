import LanguageButton from '@/components/atoms/LanguageButton'

type LanguageSwitcherProps = {
    locale: string
    onChangeLocale: (locale: 'es' | 'en') => void
}

export default function LanguageSwitcher({ locale, onChangeLocale }: LanguageSwitcherProps) {
    return (
        <div className="h-12 bg-white/80 dark:bg-neutral-900/80 border border-neutral-200 dark:border-white/10 rounded-2xl p-1 flex items-center shadow-lg transition-colors duration-300">
            <LanguageButton label="ES" isActive={locale === 'es'} onClick={() => onChangeLocale('es')} />
            <LanguageButton label="EN" isActive={locale === 'en'} onClick={() => onChangeLocale('en')} />
        </div>
    )
}
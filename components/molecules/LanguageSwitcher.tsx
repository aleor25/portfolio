import LanguageButton from '@/components/atoms/LanguageButton'

type LanguageSwitcherProps = {
    locale: string
    onChangeLocale: (locale: 'es' | 'en') => void
}

export default function LanguageSwitcher({ locale, onChangeLocale }: LanguageSwitcherProps) {
    return (
        <div className="bg-neutral-900/80 border border-white/10 rounded-2xl px-2 py-2 flex items-center shadow-lg">
            <LanguageButton label="ES" isActive={locale === 'es'} onClick={() => onChangeLocale('es')} />
            <LanguageButton label="EN" isActive={locale === 'en'} onClick={() => onChangeLocale('en')} />
        </div>
    )
}

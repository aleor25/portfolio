import CarouselArrowButton from '@/components/atoms/CarouselArrowButton'
import CarouselDotButton from '@/components/atoms/CarouselDotButton'
import { useTranslation } from '@/lib/i18n'

type ProjectCarouselProps = {
    images: string[]
    currentIndex: number
    translatedTitle: string
    currentImage: string
    onPrev: () => void
    onNext: () => void
    onGoTo: (index: number) => void
    icons: {
        ChevronLeft: React.ReactNode
        ChevronRight: React.ReactNode
    }
}

export default function ProjectCarousel({
    images,
    currentIndex,
    translatedTitle,
    currentImage,
    onPrev,
    onNext,
    onGoTo,
    icons
}: ProjectCarouselProps) {
    const { t } = useTranslation()

    return (
        <>
            <img
                src={currentImage}
                alt={t('projectCard.imageOf', { current: currentIndex + 1, title: translatedTitle })}
                className="w-full h-auto object-contain rounded-lg shadow-xl transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
                onError={(e) => {
                    ; (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x400?text=Image+not+found'
                }}
            />

            {images.length > 1 && (
                <>
                    <CarouselArrowButton
                        onClick={onPrev}
                        ariaLabel={t('projectCard.previousImage')}
                        icon={icons.ChevronLeft}
                        direction="left"
                    />

                    <CarouselArrowButton
                        onClick={onNext}
                        ariaLabel={t('projectCard.nextImage')}
                        icon={icons.ChevronRight}
                        direction="right"
                    />

                    <div className="absolute bottom-4 flex justify-center gap-2.5 z-10">
                        {images.map((_, index) => (
                            <CarouselDotButton
                                key={index}
                                onClick={() => onGoTo(index)}
                                ariaLabel={t('projectCard.goToImage', { index: index + 1 })}
                                isActive={index === currentIndex}
                            />
                        ))}
                    </div>
                </>
            )}
        </>
    )
}

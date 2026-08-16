import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import AboutMe from '@/components/organisms/AboutMe'
import Projects from '@/components/organisms/Projects'
import ScrollToTop from '../atoms/ScrollToTop'
import Experience from '../organisms/Experience'

export default function PortfolioTemplate() {
    return (
        <div className="min-h-screen bg-slate-200 dark:bg-[#121212] text-neutral-900 dark:text-white selection:bg-sky-500/30 transition-colors duration-300">
            <Header />
            <main className="flex flex-col pb-20">
                <AboutMe />
                <Experience />
                <Projects />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}
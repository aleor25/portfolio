import Header from '@/components/organisms/Header'
import Footer from '@/components/organisms/Footer'
import AboutMeSection from '@/components/organisms/AboutMeSection'
import ProjectsSection from '@/components/organisms/ProjectsSection'
import Navbar from '../organisms/NavBar'
import ScrollToTop from '../atoms/ScrollToTop'

export default function PortfolioTemplate() {
    return (
        <div className="min-h-screen bg-[#121212] text-white selection:bg-sky-500/30">
            <Header />
            <main className="flex flex-col pb-20">
                <AboutMeSection />
                <ProjectsSection />
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    )
}

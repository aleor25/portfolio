import ProjectsSection from '@/components/ProjectsSection'
import PortfolioMain from '../components/PortfolioMain'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-sky-500/30">
      <Header />

      <main className="flex flex-col pb-20">
        <PortfolioMain />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  )
}

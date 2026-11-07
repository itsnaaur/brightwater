import Header from './components/Header'
import Hero from './components/Hero'
import PracticeAreas from './components/PracticeAreas'
import Team from './components/Team'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Booking from './components/Booking'
import Footer from './components/Footer'
import MobileStickyBar from './components/MobileStickyBar'

function App() {
  return (
    <>
      <Header />
      <main className="pb-24 md:pb-0">
        <Hero />
        <PracticeAreas />
        <Team />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Booking />
      </main>
      <Footer />
      <MobileStickyBar />
    </>
  )
}

export default App

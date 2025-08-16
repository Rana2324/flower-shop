
import './index.css'
// Layout Components
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Section Components
import HeroSection from './components/sections/HeroSection'
import FeaturedProducts from './components/sections/FeaturedProducts'
import ServicesSection from './components/sections/ServicesSection'
import PromotionSection from './components/sections/PromotionSection'
import InstagramSection from './components/sections/InstagramSection'
import NewsletterSection from './components/sections/NewsletterSection'

function App() {
  return (
    <div className="app">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ServicesSection />
        <PromotionSection />
        <InstagramSection />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App

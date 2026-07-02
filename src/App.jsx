import Navbar from './components/layout/Navbar';
import Hero from './components/layout/Hero';
import RoomsSection from './components/layout/RoomsSection';
import Footer from './components/layout/Footer';
import Amenities from './components/layout/Amenities';
import FAQ from './components/layout/FAQ';
import Testimonials from './components/layout/Testimonials';

function App() {
  return (
    <div className="bg-secondary-background">
      <Navbar />
      <div className="pb-20">
      <Hero />

      </div>
      <Amenities />
      <RoomsSection />
      <Testimonials/>
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import TopBar from './components/topBar/TopBar'
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousels/Carousel';
import About from './components/about/About';
import Destinations from './components/destinations/Destinations';
import ExploreTour from './components/exploreTour/ExploreTour';
import Packages from './components/packages-items/Packages';
import Gallery from './components/gallery/Gallery';
import ShareAdventures from './components/shareAdventures/ShareAdventures';
import TravelGuide from './components/travelGuide/TravelGuide';
import OurBlog from './components/ourBlog/OurBlog';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>

      <TopBar />

      <Navbar />

      <Carousel />

      <About />

      <Destinations />

      <ExploreTour />

      <Packages />

      <Gallery />

      <ShareAdventures />

      <TravelGuide />

      <OurBlog />

      <Footer />
    </>
  )
}

export default App

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
import { Routes, Route } from 'react-router-dom'
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';

function App() {
  return (
    <>

      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>

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


      <Profile />
    </>
  )
}

export default App

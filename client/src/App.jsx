import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';
import TopBar from './components/topBar/TopBar';
import Navbar from './components/navbar/Navbar';
import Carousel from './components/carousels/Carousel';
import About from './components/about/About';
import ExploreTour from './components/exploreTour/ExploreTour';
import Packages from './components/packages/Packages.jsx';
import Gallery from './components/gallery/Gallery';
import ShareAdventures from './components/shareAdventures/ShareAdventures';
import TravelGuide from './components/travelGuide/TravelGuide';
import OurBlog from './components/ourBlog/OurBlog';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Search from './components/search/Search';
import Test from './components/test/Test';
import PackageDetails from './components/package-details/PackageDetails.jsx';
import FamilyTours from './components/family-tours/FamilyTours.jsx';

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <FamilyTours />

      <Routes>
        <Route path="/" element={
          <>
            <Carousel />
            <Search />
            <About />
            <ExploreTour />
            <Packages />
            <Gallery />
            <ShareAdventures />
            <TravelGuide />
            <OurBlog />
          </>
        } />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/lasvegas' element={<Test />} />
        <Route path='/details' element={<PackageDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

import { Routes, Route } from 'react-router-dom';


import TopBar from './components/topBar/TopBar';
import About from './components/about/About';
import ExploreTour from './components/exploreTour/ExploreTour';
import Packages from './components/packages/Packages.jsx';
import Gallery from './components/gallery/Gallery';
import ShareAdventures from './components/shareAdventures/ShareAdventures';
import TravelGuide from './components/travelGuide/TravelGuide';
import Blog from './components/blog/Blog';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Test from './components/test/Test';
import PackageDetails from './components/package-details/PackageDetails.jsx';
import ToursPage from './components/tours-page/ToursPage.jsx';
import Home from './components/home-item/Home.jsx';
import Testimonials from './components/testimonials/Testimonials.jsx';
import TourDetails from './components/tour-details/TourDetails.jsx';
import Navbar from "./components/navbar/Navbar";
import CreateBlog from './components/blog-form/create-blog/CreateBlog.jsx';
import Logout from './components/logout/Logout.jsx';
import { AuthContextProvider } from './contexts/AuthContext.jsx';

function App() {

  return (
    <AuthContextProvider>
      <TopBar />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/share-adventures" element={<ShareAdventures />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/test" element={<Test />} />
        <Route path="/details" element={<PackageDetails />} />
        <Route path="/tourCategories/:category" element={<ToursPage />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/tours" element={<ExploreTour />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/allPackages" element={<Packages />} /> {/* Page showing all packages */}
        <Route path="/allGallery" element={<Gallery />} /> {/* Page showing all gallery */}
        <Route path="/createBlog" element={<CreateBlog />} />
        <Route path="/guides" element={<TravelGuide />} />

      </Routes>

      <Footer />
    </AuthContextProvider>
  );
}

export default App;



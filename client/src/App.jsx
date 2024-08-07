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
import EditBlog from './components/blog-form/edit-blog/EditBlog.jsx';
import BlogDetails from './components/blog-details/BlogDetails.jsx';

import PrivateRoute from './guards/PrivateRoute';
import PublicRoute from './guards/PublicRoute';

function App() {

  return (
    <AuthContextProvider>
      <TopBar />
      <Navbar />

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<PublicRoute element={Home} restricted={false} />} />
        <Route path="/about" element={<PublicRoute element={About} restricted={false} />} />
        <Route path="/packages" element={<PublicRoute element={Packages} restricted={false} />} />
        <Route path="/gallery" element={<PublicRoute element={Gallery} restricted={false} />} />
        <Route path="/share-adventures" element={<PublicRoute element={ShareAdventures} restricted={false} />} />
        <Route path="/blogs" element={<PublicRoute element={Blog} restricted={false} />} />
        <Route path="/testimonials" element={<PublicRoute element={Testimonials} restricted={false} />} />
        <Route path="/register" element={<PublicRoute element={Register} restricted={true} />} />
        <Route path="/login" element={<PublicRoute element={Login} restricted={true} />} />

        {/* Private routes */}
        <Route path="/logout" element={<PrivateRoute element={Logout} />} />
        <Route path="/profile" element={<PrivateRoute element={Profile} />} />
        <Route path="/test" element={<PrivateRoute element={Test} />} />
        <Route path="/details" element={<PrivateRoute element={PackageDetails} />} />
        <Route path="/tourCategories/:category" element={<PrivateRoute element={ToursPage} />} />
        <Route path="/tours/:id" element={<PrivateRoute element={TourDetails} />} />
        <Route path="/tours" element={<PrivateRoute element={ExploreTour} />} />
        <Route path="/packages/:id" element={<PrivateRoute element={PackageDetails} />} />
        <Route path="/allPackages" element={<PrivateRoute element={Packages} />} />
        <Route path="/allGallery" element={<PrivateRoute element={Gallery} />} />
        <Route path="/createBlog" element={<PrivateRoute element={CreateBlog} />} />
        <Route path="/guides" element={<PrivateRoute element={TravelGuide} />} />
        <Route path="/blogs/edit/:blogId" element={<PrivateRoute element={EditBlog} />} />
        <Route path="/blogs/:blogId" element={<PrivateRoute element={BlogDetails} />} />
      </Routes>

      <Footer />
    </AuthContextProvider>
  );
}

export default App;



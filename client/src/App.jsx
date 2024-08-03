import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './style.css';

import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import TopBar from './components/topBar/TopBar';
import About from './components/about/About';
import ExploreTour from './components/exploreTour/ExploreTour';
import Packages from './components/packages/Packages.jsx';
import Gallery from './components/gallery/Gallery';
import ShareAdventures from './components/shareAdventures/ShareAdventures';
import TravelGuide from './components/travelGuide/TravelGuide';
import OurBlog from './components/ourBlog/OurBlog';
import Footer from './components/footer/Footer';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import Test from './components/test/Test';
import PackageDetails from './components/package-details/PackageDetails.jsx';
import ToursPage from './components/tours-page/ToursPage.jsx';
import Home from './components/home-item/Home.jsx';
import { AuthContext } from './contexts/AuthContext.js';
import Testimonials from './components/testimonials/Testimonials.jsx';
import GptTest from './components/gptTest/GptTest.jsx';
import Modal from './components/modal/Modal.jsx';
import Navbar from "./components/navbar/Navbar";

function App() {
  const [authState, setAuthState] = useState({});

  const changeAuthState = (state) => {
    setAuthState(state);
  };

  const contextData = {
    userId: authState._id,
    email: authState.email,
    acessToken: authState.acessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }


  return (
    <AuthContext.Provider value={contextData}>
      <TopBar />
      <Navbar />
      <Home />
      <About />
      <ExploreTour />
      <Packages />
      <div className="main-content">
        <Routes>
          {/* Define a route for each component with a unique path */}
          <Route path="/about" element={<About />} />
          <Route path="/explore-tour" element={<ExploreTour />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/share-adventures" element={<ShareAdventures />} />
          <Route path="/travel-guide" element={<TravelGuide />} />
          <Route path="/our-blog" element={<OurBlog />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/test" element={<Test />} />
          <Route path="/details" element={<PackageDetails />} />
          <Route path="/tourCategories/:category" element={<ToursPage />} />
        </Routes>
      </div>

      <Footer />
    </AuthContext.Provider>
  );
}

export default App;



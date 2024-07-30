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
import FamilyTours from './components/family-tours/FamilyTours.jsx';
import TestTour from './components/tours/TestTour';
import Home from './components/home-item/Home.jsx';
import { AuthContext } from './contexts/AuthContext.js';

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
      <Home />
      <About />


      <Routes>
        <Route path="/" element={
          <>
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
        <Route path='/tours/:category' element={<FamilyTours />} />

      </Routes>

      <Footer />
    </AuthContext.Provider>

  );
}

export default App;



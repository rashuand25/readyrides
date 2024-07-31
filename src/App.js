import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import ContactUs from './pages/contactPage';
import HomePage from './pages/homePage';
import ErrorPage from './pages/errorPage';
import AboutPage from './pages/aboutPage';
import AllVehiclePage from './pages/allCarsPage';
import SingleVehiclePage from './pages/singleVehiclePage';
import NavBarComponent from './components/navBarComponent';
import Footer from './components/footerComponent';

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBarComponent />
        <div className="Content">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/errorPage" element={<ErrorPage />} />
            <Route path="/vehicles" element={<AllVehiclePage />} />
            <Route path="/car/:id" element={<SingleVehiclePage />} />
          </Routes>
        </div>
        <Footer style={{ marginTop: '1rem' }} />
      </div>

    </Router>

  );
};

export default App;

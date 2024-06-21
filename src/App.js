import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import ContactUs from './pages/contactPage';
import HomePage from './pages/homepage';
// import AllProductsPage from './pages/allProducts';
import PlaceHolders from './components/vehicleCards';
import Error from './pages/errorPage';
import AboutPage from './pages/aboutPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <AboutPage />
    </div >
  );
};

export default App;

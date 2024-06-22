import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import ContactUs from './pages/contactPage';
import HomePage from './pages/homePage';
// import AllProductsPage from './pages/allProducts';
import PlaceHolders from './components/vehicleCards';
import Error from './pages/errorPage';
import AboutPage from './pages/aboutPage';



const App = () => {
  return (
    <div className="App">
        <SignUpForm />
    </div>
  );
};

export default App;


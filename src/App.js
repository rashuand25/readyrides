import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
// import SignUpForm from './SignUpForm';
// import LoginForm from './LoginForm';
import HomePage from './components/homepage';
import ContactUs from './components/contact';
import AllProductsPage from './components/allProducts';
import VehicleCard from './components/vehicleCards';

const App = () => {
  return (
    <div className="App">
      <VehicleCard />
    </div>
  );
};

export default App;

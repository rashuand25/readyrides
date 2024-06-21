// AllProductsPage.jsx
import React, { useState, useEffect } from 'react';
import './css/allProducts.css'; // Import the CSS for styling

// Component to display individual car details
const Car = ({ car }) => (
  <div className="car">
    <img src={car.imageUrl} alt={car.model} />
    <h3>{car.model}</h3>
    <p>{car.description}</p>
    <p>Price per day: ${car.pricePerDay}</p>
  </div>
);

//AllProductsPage component
const AllProductsPage = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the cars from the backend
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        const data = await response.json();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading cars...</div>;
  }

  return (
    <div className="all-products-page">
      <h1>All Cars</h1>
      <div className="cars-grid">
        {cars.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;

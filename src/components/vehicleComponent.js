import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VehicleComponent = () => {
  const [vehicles, setVehicles] = useState([]);

  const styles = {
    vehicleGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '1.5rem', // Adds space between the cars
      marginTop: '5rem',
      marginBottom: '5rem',
    },
    image: {
      width: '63%',
      objectFit: 'cover', // This will scale the image while maintaining its aspect ratio
    },
    vehicleName: {
      textAlign: 'center',
    },
    vehicle: {
      textAlign: 'center',
      border:'solid silver 2px'
    }
  };

  useEffect(() => {
    axios.get('/vehicles')
      .then((response) => {
        setVehicles(response.data.vehicles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div style={{backgroundColor:'lightgrey', paddingTop:'5rem'}}>
      <h1 style={{textAlign: 'center', marginTop:'1rem'}}>Vehicle List</h1>
      <div style={styles.vehicleGrid}> 
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle" style={styles.vehicle}>
            <h3 style={styles.vehicleName}>{vehicle.name}</h3> 
            <img style={styles.image} src={`/images/${vehicle.image_path}`} alt={vehicle.name} />
            <p>{vehicle.Description}</p>
            <p>Color: {vehicle.Color}</p>
            <p>Price per day: ${vehicle.Price}</p>
            <button style={{ padding: '.5em', backgroundColor:'orange', borderRadius:'10rem'}}>Reserve</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VehicleComponent;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleCarDetails = ({ vehicle_id }) => {
  const [vehicle, setVehicle] = useState({});

  useEffect(() => {
    axios.get(`/vehicles/${vehicle_id}`)
      .then((response) => {
        setVehicle(response.data.vehicle[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [vehicle_id]);

  return (
    <div>
      <h1>{vehicle.name}</h1>
      <img src={`/images/${vehicle.image_path}`} alt={vehicle.name} />
      <p>{vehicle.Description}</p>
      <p>Color: {vehicle.Color}</p>
      <p>Price per day: ${vehicle.Price}</p>
    </div>
  );
};

export default SingleCarDetails;

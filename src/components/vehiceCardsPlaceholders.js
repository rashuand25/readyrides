const VehicleCardPlaceHolders = () => (
    <div className="car-card">
      <div className="car-image">
        {/* Placeholder for image */}
        <img src="placeholder-image-url.jpg" alt="vehicle" />
      </div>
      <div className="car-content">
        <h3 className="car-model">Model Name</h3>
        <p className="car-description">Description of the vehicle...</p>
        <p className="car-price">$00,000</p>
      </div>
    </div>
  );
  
  export default VehicleCardPlaceHolders;
  
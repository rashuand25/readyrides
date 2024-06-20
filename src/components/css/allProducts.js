/* AllProductsPage.css */
.all-products-page {
    padding: 20px;
  }
  
  .cars-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 20px;
    justify-items: center;
  }
  
  .car {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
  
  .car img {
    max-width: 100%;
    height: auto;
    border-bottom: 1px solid #ccc;
  }
  
  /* Responsive adjustments */
  @media (max-width: 1000px) {
    .cars-grid {
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
  
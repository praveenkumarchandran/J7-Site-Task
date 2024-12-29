import React from 'react';
import './styles.css';
import carouselImage from './assets/carousel2.jpg';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();

    const goToShop = () => {
        navigate('/products');
    };   
  return (
    <div className="banner">
      <div className="banner-content">
      <img src={carouselImage} alt="Carousel Image" /><br />
        <h1>Exclusive Deals Just for You!</h1>
        <p>Shop our latest collection and save big on your favorite items.</p>
        <button onClick={goToShop} className="btn-shop-now">Shop Now</button>
      </div>
      
      
    </div>
    
  );
};

export default Banner;

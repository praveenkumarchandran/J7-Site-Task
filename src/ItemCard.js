import React, { useState } from 'react';
import { useCart } from 'react-use-cart'; 
import { Button } from '@mui/material';
import { Add, Remove } from '@mui/icons-material'; 


const ItemCard = (props) => {
  const { addItem } = useCart(); 
  
  const [quantity, setQuantity] = useState(1);

  
  const handleIncrease = () => {
    setQuantity(prevQuantity => prevQuantity + 1); 
  };

  
  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1); 
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: props.id,
      title: props.title,
      price: props.price,
      desc: props.desc,
      img: props.img,
      quantity: quantity, // Pass the updated quantity here
    },quantity);
  };

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt={props.title} />
        <div className="card-body text-center">
          
          
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card-text">${props.price}</h5>
          <h5 className="card-text">{props.desc}</h5>

          
          <div className="quantity-controls d-flex justify-content-center align-items-center mb-3">
            
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleDecrease}   
              sx={{ marginRight: '8px' }} 
            >
              <Remove />  
            </Button>

            
            <span>{quantity}</span>

            
            <Button
              variant="outlined"
              color="primary"
              onClick={handleIncrease}  
              sx={{ marginLeft: '8px' }}  
            >
              <Add />  
            </Button>
          </div>

          
          <button
          className='btn btn-success'
           
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;

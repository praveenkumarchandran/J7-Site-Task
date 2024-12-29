import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from 'react-use-cart';  
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    //top: ,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CustomizedBadges() {
  const { totalUniqueItems } = useCart();
  console.log('Total Items in Cart:', totalUniqueItems); 
  

  return (
    <Link to="/cart"> 
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={totalUniqueItems} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
    </Link>
  );
}

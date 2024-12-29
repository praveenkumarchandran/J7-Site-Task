import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { Add, Remove } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Checkbox, Button, Typography, Grid, Box, Card, CardContent } from '@mui/material';

const Cart = () => {
    const {
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();

    const [selectedItems, setSelectedItems] = useState({});

    const handleCheckboxChange = (itemId) => (event) => {
        setSelectedItems({
            ...selectedItems,
            [itemId]: event.target.checked,
            
            
        });
        console.log('Selected Items:', selectedItems);
        
    };

    // Function to safely format price
    const formatPrice = (price) => {
        if (price && !isNaN(price)) {
            return Number(price).toFixed(2);
        }
        return '0.00'; // Fallback if price is not available
    };

    // Calculate total for selected items
    const selectedItemsTotal = Object.keys(selectedItems).reduce((total, itemId) => {
        if (selectedItems[itemId]) {
            const item = items.find((item) => item.id === itemId);
            if (item) {
                return total + (Number(item.price) * item.quantity);
            }
        }
        return total;
    }, 0);

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Cart ({totalUniqueItems}) total Items: ({totalItems})</h5><br />
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item) => {
                                if (!item) return null;  // Skip rendering if item is undefined
                                return (
                                    <tr key={item.id}>
                                        <td>
                                            <Checkbox
                                                checked={selectedItems[item.id] || false}
                                                onChange={handleCheckboxChange(item.id)}
                                            />
                                        </td>
                                        <td>
                                            <img src={item.img} style={{ height: '6rem' }} alt={item.title} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>${formatPrice(item.price)}</td>
                                        <td>Quantity ({item.quantity})</td>
                                        <td>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >
                                                <Remove />
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="primary"
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >
                                                <Add />
                                            </Button>
                                            <Button
                                                variant="outlined"
                                                color="error"
                                                onClick={() => removeItem(item.id)}
                                            >
                                                Remove
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Display selected items total */}
                <div className="col-auto ms-auto">
                    <h2>Total price: ${formatPrice(cartTotal)}</h2>
                    <h3>Selected Items Total: ${formatPrice(selectedItemsTotal)}</h3>
                </div>

                <div className="col-auto">
                    <Button
                        className="btn btn-danger m-2"
                        onClick={emptyCart}
                    >
                        Clear Cart
                    </Button>

                    {/* Passing selected items to checkout */}
                    <Link
                        to={{
                            pathname: "/checkout",
                            state: {
                                selectedItems,
                                selectedItemsTotal,
                            },
                        }}
                    >
                        <Button className="btn btn-primary m-2">Buy Now</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Cart;

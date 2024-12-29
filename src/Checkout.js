import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Button, Box } from '@mui/material';

const Checkout = () => {
    const location = useLocation();
    const { selectedItems, selectedItemsTotal } = location.state || {}; // Get data from Cart page


    if (!selectedItems || Object.keys(selectedItems).length === 0) {
        return <Typography variant="h5" align="center">Your cart is empty. Please select items to proceed.</Typography>;
    }

    // Discount and tax rates
    const discount = 10; // 10% discount
    const taxRate = 0.15; // 15% tax

    const discountAmount = (selectedItemsTotal * discount) / 100;
    const taxAmount = (selectedItemsTotal * taxRate);
    const totalWithTax = selectedItemsTotal - discountAmount + taxAmount;

    return (
        <Box sx={{ padding: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Checkout
            </Typography>

            {/* Order Summary */}
            <Card sx={{ marginBottom: 3 }}>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        Order Summary
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Item</strong></TableCell>
                                    <TableCell align="right"><strong>Price</strong></TableCell>
                                    <TableCell align="right"><strong>Quantity</strong></TableCell>
                                    <TableCell align="right"><strong>Total</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(selectedItems).map((itemId) => {
                                    const item = selectedItems[itemId];
                                    return (
                                        <TableRow key={itemId}>
                                            <TableCell>{item.title}</TableCell>
                                            <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                                            <TableCell align="right">{item.quantity}</TableCell>
                                            <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>

            {/* Price Details */}
            <Grid container spacing={2} sx={{ marginBottom: 3 }}>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Price Details</Typography>
                            <Typography variant="body1"><strong>Cart Total:</strong> ${selectedItemsTotal.toFixed(2)}</Typography>
                            <Typography variant="body1"><strong>Discount ({discount}%):</strong> -${discountAmount.toFixed(2)}</Typography>
                            <Typography variant="body1"><strong>Tax ({taxRate * 100}%):</strong> +${taxAmount.toFixed(2)}</Typography>
                            <Typography variant="h6"><strong>Total Amount:</strong> ${totalWithTax.toFixed(2)}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Action Buttons */}
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Button fullWidth variant="outlined" color="error" size="large">Cancel</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button fullWidth variant="contained" color="primary" size="large">Proceed to Payment</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Checkout;

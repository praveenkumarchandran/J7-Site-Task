import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const RemoveItemButton = ({ item, removeItem }) => {
  const [open, setOpen] = useState(false); 


  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };


  const handleConfirmRemove = () => {
    removeItem(item.id, item.quantity - 1); 
    setOpen(false); 
  };

  return (
    <div>

<Button
        className="btn-btn-info ms-2"
        variant=""
        color="secondary"
        onClick={handleClickOpen}
      >
        
        
         <Button variant="contained" color="success" sx={{ m: 1, left: '90px', marginTop: '-60px' }} onClick={handleClickOpen}>
          <DeleteIcon/> Remove Item
          </Button>

      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Removal</DialogTitle>
        <DialogContent>
          Are you sure you want to remove {item.name} from the cart?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmRemove} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default RemoveItemButton;

import React, {  useContext } from 'react';
import { Button, Popover, Typography, Grid,CardContent,Card,CardHeader,CardActions } from '@mui/material';
import { CartContext } from "../contextAPI/CartContext";
import {  Link } from "react-router-dom";

const PopoverCart = ({ anchorEl, handleClose,id }) => {
  const open = Boolean(anchorEl);

  const { carrinho,setCarrinho, getTotal} = useContext(CartContext);

  const handleDeleteItem = (id) => {
    const updatedItems = carrinho.filter(item => item.id !== id);
    setCarrinho(updatedItems);
  };



  return (
    <Popover
      
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      onMouseEnter={() => {
        // Manter o popover aberto quando o mouse está sobre ele
      }}
      onMouseLeave={handleClose}
    >
      { carrinho.length === 0 ? (
       // <Typography sx={{ p: 2 }}>List is empty</Typography>
       <Grid container spacing={2} sx={{ p: 2, maxWidth: 400 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            O seu carrinho está vazio.
            Continue navegando para encontrar o seu curso!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button component={Link} to="/courses" variant="contained" color="primary" fullWidth >
            Cursos
          </Button>
        </Grid>
      </Grid>


      ) : (
       // <Typography sx={{ p: 2 }}>List has {carrinho.length} items</Typography>
       
        
        //
        <Grid container spacing={2} sx={{ p: 2, maxWidth: 400 }}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Shopping Cart
          </Typography>
        </Grid>
        {carrinho.map(item => (
          <Grid item key={item.id} xs={12}>
            <Card>
              <CardHeader title={item.title} />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  Preço: R${item.price}
                </Typography>
                
              </CardContent>
              <CardActions>
                
                <Button onClick={() => handleDeleteItem(item.id)} variant="outlined" size="small">Remove</Button>
                
              </CardActions>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h6" align="right">
            Total: R${getTotal()}
          </Typography>
          <Button component={Link} to="/cart" variant="contained" color="primary" sx={{ marginLeft: 'auto' }}>
            Continuar           
          </Button>
        </Grid>
      </Grid>


        //
      )}

     
    




    </Popover>
  );
};

export default PopoverCart;
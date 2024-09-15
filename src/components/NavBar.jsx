
import React, { useState, useContext } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Button, CssBaseline, Typography,Autocomplete,TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import PopoverCart from '../components/PopoverCart';



import { CartContext } from "../contextAPI/CartContext";

const options = [
  { label: 'DevOps', value: '/courses/DevOps/#top' },
  { label: 'Linux', value: '/courses/Linux/#top' },
  { label: 'Cloud', value: '/courses/Cloud/#top' },
  { label: 'Segurança', value: '/courses/Segurança/#top' },
]; // Lista de opções com rótulos e valores de rota

const theme = createTheme({
  typography: {
    fontFamily: [
      'Work Sans',
      
    ].join(','),
  },
});

const loginStyles = {
  
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '6rem',
  height: '3rem',
  
};

const logoStyles = {
  
  borderColor: 'text.primary',
  m: 1,
  border: 1,
  width: '6rem',
  height: '3rem'
  
};


function NavBar() {

  // 4 - Usar o contexto
  const { carrinho,handleOpenCart,handleCloseCart,open } = useContext(CartContext);
  const id = open ? 'simple-popover' : undefined;

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const navigate = useNavigate();
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue) {
      navigate(newValue.value); // Redireciona para a rota correspondente ao valor selecionado
    }
  };


    return (
      <>
        <React.Fragment>
          <CssBaseline />
            <Box sx={{ flexGrow: 1}}>
              <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                  <Stack direction="row" alignItems="center">  
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <ThemeProvider theme={theme}>
                        <Typography
                          align="center"
                          variant="h6"
                          noWrap
                          component={Link} to="/" color="inherit" underline="none"
                          sx={{ ...logoStyles,borderRadius: '16px' , flexGrow: 1, display: { xs: 'none', sm: 'block' },textDecoration: 'none','&:hover': { textDecoration: 'none' } }}
                          ><b>
                          KIAINFO            
                          </b>
                        </Typography>
                      </ThemeProvider>
                    </Box>
                  </Stack>

{/* busca */}

                  
                   
                  <Stack spacing={2} sx={{ width: 400 }}>
                   
                    
                    <Autocomplete
                      freeSolo
                      id="free-solo-2-demo"
                      disableClearable
                      value={value}
                      onChange={handleChange}
                      options={options}
                      getOptionLabel={(option) => option.label} // Função para obter o rótulo da opção
                      noOptionsText="Nenhuma opção disponível" 
                      renderInput={(params) => <TextField {...params} label=" O que gostaria de aprender?"
                      
                      InputLabelProps={{
                        style: { textAlign: 'center', color: 'inherit' }, // Estilo para a cor do rótulo
                      }}
                      
                      />}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          border: 'none', // Remove a borda
                          color: 'inherit',
                          backgroundColor: alpha(theme.palette.common.white, 0.15),
                         
                          borderRadius: theme.shape.borderRadius,
                          '&:hover': {
                            border: 'none', // Remove a borda no hover também
                            color: 'inherit',
                            backgroundColor: alpha(theme.palette.common.white, 0.15),
                            
                            borderRadius: theme.shape.borderRadius,
                          },
                          '&.Mui-focused': {
                            border: 'none', // Remove a borda quando o campo está focado
                            color: 'inherit',
                            backgroundColor: alpha(theme.palette.common.white, 0.15),
                            
                            borderRadius: theme.shape.borderRadius,
                          },
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          border: 'none', // Remove a borda da variante outlined, se necessário
                        },
                        width: '400px',
                        
                        
                        
                      }}
                      />
                     
                  </Stack>
                   

{/*
                    <StyledInputBase
                      placeholder="O que gostaria de aprender?"
                      inputProps={{ 'aria-label': 'search' }}
                      //onChange={handleChange}
                      sx={{
                        width: '400px'
                      }}
                    />
                    */}
                  
{/* fim busca */}

                  <Box sx={{ flexGrow: 1 }} />
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    
                    <MenuItem>
                      

                      <IconButton 
                        aria-describedby={id} variant="contained" onClick={handleClick}


                        size="large" aria-label="show 4 itens" color="inherit" >
              
                        <Badge            
                          badgeContent={carrinho.length} color="error">
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                      <PopoverCart sx={{ p: 2 }}  anchorEl={anchorEl} handleClose={handleClose} id={id}> </PopoverCart>


                      <Button sx={{ ...loginStyles, borderRadius: '16px' }} color="inherit">Sign in</Button>
                      <Button sx={{ ...loginStyles, borderRadius: '16px' }}  color="inherit"><b>Sign up</b></Button>
            
        
                    </MenuItem>
                   
                  </Box>
      
                </Toolbar>
              </AppBar>
          
                <Outlet /> 
            </Box>
        </React.Fragment>

       
        </>
    )
}

export default NavBar;
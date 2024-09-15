import React from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Work Sans',
        
      ].join(','),
    },
  });
  
  const logoStyles = {
    
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '6rem',
    height: '3rem'
    
  };

function Sentence(){

    return (
        <ThemeProvider theme={theme}>
            <Typography align="center"
                  variant="h6"
                  noWrap
                  component="div"
      
                  sx={{ borderRadius: '16px' , flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Explore os nossos cursos.</Typography>

                <Typography align="center"
                  variant="h6"
                  noWrap
                  component="div"
      
                  sx={{ borderRadius: '16px' , flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>Crie a sua carreira dentro de 6 meses.</Typography>
            </ThemeProvider>

    )
}

export default Sentence;
import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Height } from "@mui/icons-material";
import Box from '@mui/material/Box';


const footerStylesBar = {
      height: "50px",
      top: "auto",
      bottom: 0
  };

const footerStyles = {
    flexGrow: 1,
    textAlign: "center"
}




function Footer(){
    
    
    return (
        <Box>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, ...footerStylesBar }}>
            <Toolbar>
                <Typography sx={{...footerStyles}}>© kiainfo.com.br 2014. Todos os direitos reservados</Typography>
            </Toolbar>


        </AppBar>
        </Box>
    
    )
}

export default Footer;
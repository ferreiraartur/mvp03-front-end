import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const footerStylesBar = {
    height: "10px",
    top: "auto",
    bottom: 0,
    color: "black"
};

const footerStyles = {
  flexGrow: 1,
  textAlign: "center"
}

function Box1(){
    return (
        <AppBar sx={{}}>
            <Toolbar>
            <Typography >testando</Typography>
                
            </Toolbar>


        </AppBar>
    )
}

export default Box1;

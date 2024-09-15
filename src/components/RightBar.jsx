import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';



function RightBar(){
    return (

        <Grid item xs={3}>
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            width: 150,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 150,
              boxSizing: 'border-box',
            },
          }}
        >
          <Typography variant="h6" sx={{ p: 2 }}>
            Right Bar
          </Typography>
          <Divider />
          
        </Drawer>
      </Grid>
    )
}

export default RightBar;
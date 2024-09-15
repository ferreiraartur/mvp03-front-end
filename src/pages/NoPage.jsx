import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';


import dados from '../dados.json'


function NoPage(){
    

  
return (
        <div>

          <Toolbar></Toolbar>
          <Toolbar></Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={9}>

            <Typography variant="h1" align='center'>404</Typography>



            </Grid>
          </Grid>
            
      
     

     
    </div>
    )
}

export default NoPage;
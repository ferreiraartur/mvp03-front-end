import React from 'react';
import { Card, CardContent, Typography, CardMedia,CardActionArea, CardActions, Button, Grid, Box} from '@mui/material';
import { Outlet } from "react-router-dom";
import {  HashLink as Link } from 'react-router-hash-link';

const CourseCards = ({ course }) => {
  return (
   <div style={{ padding: 15 }} >
    
    <Card style={{ width: 300, height: 350 }} sx={{   borderRadius: 5}}>
    
      <CardMedia
        height= "160" 
        component="img"
        image={course.imageUrl}
        alt={course.name}>
      </CardMedia>
      <hr></hr>
      
      <CardContent>
        <Typography variant="h6" component="div"
          sx={{ width: '100%', textAlign: 'center' }}
        >
          {course.name}
        </Typography>
        
        <Typography variant="h10" color="text.secondary"
          sx={{ width: '100%', textAlign: 'center' }}
        >
          {course.description}
          
        </Typography>
        
      </CardContent>

      <CardActionArea>  
      
        <Button component={Link} to={"/courses/"+course.name+"/#top"} size="small" color="primary"
          sx={{ width: '100%', textAlign: 'center' }}
        >
            Mais detalhes
        </Button>
      
      </CardActionArea>
        
      
      
      
    </Card>
    <Outlet /> 
    
</div>
    
    
  );
};

export default CourseCards;

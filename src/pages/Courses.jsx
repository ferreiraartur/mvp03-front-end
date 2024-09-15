import React, { useState, useContext, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Toolbar,CardMedia } from '@mui/material';
import LeftBar  from '../components/LeftBar';
import RightBar from '../components/RightBar'
//import dados from '../dados.json'
import BeautifulButton from '../components/BeautifulButton'
import axios from 'axios'

// 3 - Consumir o contexto
import { CartContext } from "../contextAPI/CartContext";


function Courses(){

  const { carrinho,adicionarAoCarrinho } = useContext(CartContext);
  const [courses, setCourses] = useState([]);
  //const [image, setImage] = useState([]);
  
  useEffect(() =>{
    axios.get('http://localhost:5000/courses')
      .then(res => setCourses(res.data.courses))
      .catch(error => console.log(error))

  }, [])


  return (
    <>
     <div id="top">
     <Toolbar></Toolbar>
    <Grid container spacing={2}>
      {/* leftBar (Drawer esquerdo) */}
      <LeftBar />
      
      {/* Conteúdo principal */}

      <Grid item xs={9}>
        <Toolbar />
        <Typography variant="h4">Listagem de Cursos</Typography>
        
        <List>
          { courses.map((course) => (
            <ListItem key={course.id}>
              <Card sx={{ width: '100%' }}>
                <Grid container spacing={2}>

                  <Grid item xs={2}>

                    <CardMedia
                
                      sx={{ width: '180px', height: '150px' }} 
                      component="img"
                      image={"http://localhost:5000/images?id=" +course.id} 
                      
                      alt={course.title}>
                
                    </CardMedia>
                  </Grid>

                <Grid item xs={10}>
                 <CardContent>
                  <Typography variant="h6" component="div">
                    {course.title}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {course.content}
                  </Typography>
                  <Typography variant="h7">
                   Preço: R$ {course.price}
                  </Typography>

                  <Grid item xs={12} container justifyContent="flex-end">                    
                    <BeautifulButton onClick={() => adicionarAoCarrinho(course)} >
                          Comprar
                    </BeautifulButton>
                  </Grid>
                 </CardContent>
                </Grid>
              </Grid>
              </Card>
            </ListItem>
          ))}
        </List>
      </Grid>

     

      {/* rightBar (Drawer direito) */}
      <RightBar />
    </Grid>
    </div>
    </>
  );
  
};

export default Courses;
import React from "react";
import BannerSlider from '../components/BannerSlider.jsx'
import CourseCarousel from '../components/CourseCarousel.jsx';
import Sentence from '../components/Sentence.jsx';
import Toolbar from '@mui/material/Toolbar';

const courses = [
    {
      id: 1,
      name: 'DevOps',
      description: 'Automação, CI/CD, containers orquestração, infraestrutura como código e monitoramento.',
      imageUrl: '/src/assets/cards/card01.png',
      
      
    },
    {
      id: 2,
      name: 'Linux',
      description: 'Essencial para quem deseja dominar um dos S.O. mais populares do mundo.',
      imageUrl: '/src/assets/cards/card02.png',
    },
    {
      id:3,
      name: 'Cloud',
      description: 'Essencial para profissionais de T.I. interessados nos conceitos e práticas da computação em nuvem. ',
      imageUrl: '/src/assets/cards/card03.png',
    },
    {
      id: 4,
      name: 'Segurança',
      description: 'Fundamental para profissionais interessados em práticas avançadas contra ameaças cibernéticas.',
      imageUrl: '/src/assets/cards/card04.png',
    },
    {
      id: 5,
      name: 'Java',
      description: 'Fundamental para quem deseja aprender uma das linguagens de programação mais populares.',
      imageUrl: '/src/assets/cards/card05.png',
    },
    { id: 6,
      name: 'Python',
      description: 'Fundamental para quem deseja aprender uma das linguagens de programação mais populares.',
      imageUrl: '/src/assets/cards/card06.png',
    },
    
  ];

function Home(){

    return (
        <>
            <Toolbar></Toolbar>
            <BannerSlider />
            <Toolbar />
            <Sentence />
            <Toolbar />
            <CourseCarousel courses={courses} />
        </>
    )
}

export default Home;

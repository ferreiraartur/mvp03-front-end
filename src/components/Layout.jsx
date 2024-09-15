import '../App.css'
import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import { Container} from '@mui/material';

function Layout(props){
    return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ marginTop: '64px', height: '150vh' }}>
        <main>
            
            

        {props.children}
        <Footer />
        </main>
       
     </Container>

    </>
    );
}

export default Layout
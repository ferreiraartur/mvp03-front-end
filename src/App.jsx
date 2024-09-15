
import RoutePages from './RoutePages.jsx';
import Courses from './pages/Courses.jsx';
import Cart from './pages/Cart.jsx';

import { CartProvider } from "./contextAPI/CartContext.jsx"; 
import NavBar from './components/NavBar.jsx';




function App() {
  return (

    <div className="App">
      <CartProvider>
    
        <RoutePages>
          
          <Cart />
          <Courses />
        </RoutePages>

      </CartProvider>

    </div>
      
    
    
  )
}

export default App

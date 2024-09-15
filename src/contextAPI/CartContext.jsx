import React, { createContext, useContext, useState } from 'react';


// 1 - Criar um contexto
const CartContext = createContext();


  

const CartProvider = ({ children }) => {

    
    const [carrinho, setCarrinho] = useState([]);

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);

    const handleOpenCart = (event) => {
      console.log(event);
      console.log('Mouse enter');
      setAnchorEl(event.currentTarget);
    };

    const handleCloseCart = () => {
      console.log('Mouse saiu');
      setAnchorEl(null);
    };

    const handleClick = () => {
        // Lógica para manipular o clique do botão
        console.log('Botão clicado!');
    
        setCount(setCount => count + 1)
        //setDisabled(true);
        
      };

      const getTotal = () => {
        return carrinho.reduce((total, item) => total + item.price , 0);
      };

      const adicionarAoCarrinho = (course) => {
        setCarrinho([...carrinho, course]);
    
        carrinho.map((course) => (
          console.log("teste1234" + course.title)
        ))
        //handleClick();   
     };

     const handleClearCart = () => {
      setCarrinho([]);
    };


    return (
        <>
        <CartContext.Provider  value={{  adicionarAoCarrinho,carrinho, setCarrinho, getTotal, handleClearCart,handleOpenCart,handleCloseCart,anchorEl,open}}>
            {children}
        </CartContext.Provider>
        
        
        </>

    );
  };
  export { CartContext, CartProvider };
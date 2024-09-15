import React, { useState, useContext } from 'react';
import { Button, Modal } from '@mui/material';


import { CartContext } from "../contextAPI/CartContext";



function PageTeste(){

  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const { carrinho } = useContext(CartContext);

  const handleOpenModal1 = () => {
    setOpenModal1(true);
  };

  const handleCloseModal1 = () => {
    setOpenModal1(false);
  };

  const handleOpenModal2 = () => {
    setOpenModal2(true);
  };

  const handleCloseModal2 = () => {
    setOpenModal2(false);
  };

  const isListEmpty = carrinho.length === 0;

 




    //const [anchorEl, setAnchorEl] = React.useState(null);

    //const [modalType, setModalType] = useState('modal1');



  //const handleClick = (event) => {
  //  setAnchorEl(event.currentTarget);
  //};

 // const handleClose = () => {
  //  setAnchorEl(null);
 // };

  //const open = Boolean(anchorEl);
  //const id = open ? 'simple-popover' : undefined;

  return (

   

    <div>
      <h1>Página com Modais</h1>
      <Button variant="contained" onClick={handleOpenModal1} disabled={!isListEmpty}>
        Abrir Modal 1
      </Button>
      <Button variant="contained" onClick={handleOpenModal2} disabled={isListEmpty} style={{ marginLeft: '10px' }}>
        Abrir Modal 2
      </Button>

      {/* Modal 1 */}
      {isListEmpty ? (
        <Modal
          open={openModal1}
          onClose={handleCloseModal1}
          aria-labelledby="modal1-modal-title"
          aria-describedby="modal1-modal-description"
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <h2 id="modal1-modal-title">Modal 1 Title</h2>
            <p id="modal1-modal-description">Conteúdo do Modal 1...</p>
            <Button onClick={handleCloseModal1}>Fechar</Button>
          </div>
        </Modal>
      ) : null}

      {/* Modal 2 */}
      {!isListEmpty ? (
        <Modal
          open={openModal2}
          onClose={handleCloseModal2}
          aria-labelledby="modal2-modal-title"
          aria-describedby="modal2-modal-description"
        >
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
            <h2 id="modal2-modal-title">Modal 2 Title</h2>
            <p id="modal2-modal-description">Conteúdo do Modal 2...</p>
            <Button onClick={handleCloseModal2}>Fechar</Button>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};


    
 

export default PageTeste;

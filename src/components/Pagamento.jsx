import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Outlet, Link } from "react-router-dom";


function Pagamento ({ open, handleClose }){


    return (
        <>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Pagamento Efetuado com Sucesso!</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    O seu pagamento foi efetuado com sucesso. Muito obrigado pela sua compra!
                </DialogContentText>
                <Button component={Link} to="/" color="primary" >
                    Continue navegando
                </Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Fechar
                </Button>
            </DialogActions>
        </Dialog>
        
        
        </>
    )
}


export default Pagamento;
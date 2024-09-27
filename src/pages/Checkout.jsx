import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Toolbar } from '@mui/material';
import LeftBar  from '../components/LeftBar';
import RightBar from '../components/RightBar'
import {FormControl, TextField, Divider} from '@mui/material'
import Pagamento from '../components/Pagamento'
import { CartContext } from "../contextAPI/CartContext";
import axios from 'axios';

function Checkout(){

    const [cep, setCep] = useState('');
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(null);

    const [couponCode, setCouponCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const calculateFinalAmount = () => {
        const discountAmount = (getTotal() * discount) / 100;
        return getTotal() - discountAmount;
    };


    const handleValidateCoupon = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/cupom?code=${couponCode}`);
            console.log(response.data)
            console.log(response.data.valid)
            if (response.data.valid) {
                setDiscount(response.data.discount);
                //setTotal(getTotal() - response.data.discount);
                setError('');
            } else {
                setError('Cupom inválido');
            }
        } catch (err) {
            setError('Erro ao validar o cupom');
        }
    };
    

    const handleCepChange = (event) => {
        const newCep = event.target.value;
        setCep(newCep);

        if (newCep.length === 8 ) {
            fetchAddress(newCep);
        }
       // console.log(newCep);
        //console.log(address);
        
    }

    const fetchAddress = async (cep) => {

        console.log("teste",cep);
        
        if (!cep || cep.length !==8) return;
        try {
          setError(null); // Clear previous errors
          const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
          if (response.data.erro) {
            throw new Error('CEP não encontrado');
          }
          setAddress(response.data);
          
        } catch (err) {
          setError(err.message);
          setAddress(null);
        }
      };


    const [openModal, setOpenModal] = useState(false);

    const { getTotal,handleClearCart } = useContext(CartContext);
    
    const handleOpenModal = () =>{
        setOpenModal(true);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const [formData, setFormData] = useState({
        titular: '',
        numeroCartao: '',
        vencimento: '',
        cvv: '',
        nome: '',
        sobrenome: '',
        email: '',
        endereco: '',
        cep: '',

    });

    const [formErrors, setErrors] = useState({
        titular: false,
        numeroCartao: false,
        vencimento: false,
        cvv: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    



    const handleSubmit = (e) => {
        // Lógica para manipular o clique do botão
        console.log('Botão clicado!');
        e.preventDefault();

        const errors = {};
        if (formData.titular == ''){
            errors.titular = true;
        }
        if (formData.numeroCartao == '') {
            errors.numeroCartao = true;
        }
        if (formData.vencimento == ''){
            errors.vencimento = true;
        }
        if (formData.cvv == ''){
            errors.cvv = true;
        }
        if (formData.nome == ''){
            errors.nome = true;
        }
        if (formData.sobrenome == ''){
            errors.sobrenome = true;
        }
        if (formData.email == ''){
            errors.email = true;
        }
       

        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            console.log ('Dados do formulário: ', formData);
            setFormData({
                titular: '',
                numeroCartao: '',
                vencimento: '',
                cvv: '',
                nome: '',
                sobrenome: '',
                email: '',
                
            });
            handleOpenModal();
            handleClearCart();
            }
        
      };

      const handleClick = () => {
        // Lógica para manipular o clique do botão
        console.log('Botão clicado!');
        
      };

    return (
        <div>
         <h1 id="top"></h1>
        <Grid container spacing={2}>
            <LeftBar />

            {/* Conteúdo principal */}

            <Grid item xs={4}>
                <Toolbar />
                <Toolbar />
                <Typography variant="h4">Checkout</Typography>
                <Card sx={{ width: '100%' }}>
                    <Grid item xs={9}>
                        
                        <Typography variant="h6" component="div">Aceitamos todos os cartões de crédito</Typography>

                    </Grid>
                </Card>
                <Toolbar />
                <Card sx={{ width: '100%' }}>
                    <Typography variant="h6" component="div">Detalhes de pagamento</Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid item xs={11}>
                            <FormControl fullWidth>
                                <TextField
                                    label="Nome titutar cartão"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="titular"
                                    value={formData.titular}
                                    onChange={handleChange}
                                    error={formErrors.titular}
                                    helperText={formErrors.titular ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="Número do cartão"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="numeroCartao"
                                    value={formData.numeroCartao}
                                    onChange={handleChange}
                                    error={formErrors.numeroCartao}
                                    helperText={formErrors.numeroCartao ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="MM/YY"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="vencimento"
                                    value={formData.vencimento}
                                    onChange={handleChange}
                                    error={formErrors.vencimento}
                                    helperText={formErrors.vencimento ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="CVV"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="cvv"
                                    value={formData.cvv}
                                    onChange={handleChange}
                                    error={formErrors.cvv}
                                    helperText={formErrors.cvv ? 'Campo obrigatório' : ''}
                                />
                            </FormControl>
                            <Typography variant="h7" component="div">Não armazenamos as informações do seu cartão de crédito.</Typography>

                        </Grid>
                    </form>
                </Card>

                <Toolbar />

                {/* Billing*/}
                <Card sx={{ width: '100%' }}>
                    <form >
                        <Grid item xs={11}>
                            <Typography variant="h7" component="div">Detalhes de pagamento</Typography>
                            <FormControl fullWidth>
                                <TextField
                                    label="Primeiro nome"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    error={formErrors.nome}
                                    helperText={formErrors.nome ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="Segundo nome"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="sobrenome"
                                    value={formData.sobrenome}
                                    onChange={handleChange}
                                    error={formErrors.sobrenome}
                                    helperText={formErrors.sobrenome ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="e-mail"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={formErrors.email}
                                    helperText={formErrors.email ? 'Campo obrigatório' : ''}
                                />
                                <TextField
                                    label="Cep"
                                    variant="outlined"
                                    required
                                    autoFocus
                                    name="cep"
                                    value={cep}
                                    onChange={handleCepChange}
                                    error={formErrors.cep}
                                    maxLength="8"
                                    helperText={formErrors.cep ? 'Campo obrigatório' : ''}
                                    
                                />
                                {error && <p style={{ color: 'red' }}>{error}</p>}
                                {address && (
                                    <TextField
                                        label="Rua"
                                        variant="outlined"
                                        required
                                        autoFocus
                                        name="rua"
                                        value={address.logradouro}
                                        error={formErrors.logradouro}
                                        helperText={formErrors.logradouro ? 'Campo obrigatório' : ''}
                                    />
                                )}
                                {address && (
                                    <TextField
                                        label="Complemento"
                                        variant="outlined"
                                        required
                                        autoFocus
                                        name="complemento"
                                        value={address.complemento}
                                        error={formErrors.complemento}
                                        helperText={formErrors.complemento ? 'Campo obrigatório' : ''}
                                    />
                                )}

                                {address && (
                                    <TextField
                                        label="Bairro"
                                        variant="outlined"
                                        required
                                        autoFocus
                                        name="bairro"
                                        value={address.bairro}
                                        error={formErrors.bairro}
                                        helperText={formErrors.bairro ? 'Campo obrigatório' : ''}
                                    />
                                )}

                                {address && (
                                    <TextField
                                        label="Localidade"
                                        variant="outlined"
                                        required
                                        autoFocus
                                        name="localidade"
                                        value={address.localidade}
                                        error={formErrors.localidade}
                                        helperText={formErrors.localidade ? 'Campo obrigatório' : ''}
                                    />
                                )}

                                {address && (
                                    <TextField
                                        label="Estado"
                                        variant="outlined"
                                        required
                                        autoFocus
                                        name="estado"
                                        value={address.uf}
                                        error={formErrors.uf}
                                        helperText={formErrors.uf ? 'Campo obrigatório' : ''}
                                    />
                                )}
                                
                                
                                
                            </FormControl>
                            
                            

                        </Grid>
                    </form>
                </Card>
                </Grid>

                {/*  resumo*/}
                <Grid item xs={5}>
                    <Toolbar />
                    <Toolbar />
                    
                
                <Toolbar />
                <Card sx={{ width: '100%' }}>
                            <Grid container spacing={2}>
                                <CardContent>
                                        <Typography variant="h4" component="div">
                                            Resumo do pedido
                                        </Typography>
                                        <Divider variant="fullWidth" />
                                        
                                        <Typography variant="body1" component="div">
                                            Subtotal: R$ {getTotal() }
                                        </Typography>
{/*teste */}
<CardContent>
            <Typography variant="h6">Aplicar Cupom de Desconto</Typography>
            <Divider variant="fullWidth" />
            <TextField
                label="Cupom"
                variant="outlined"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                sx={{ marginRight: '10px' }}
            />
            <Button onClick={handleValidateCoupon} variant="contained" color="primary">
                Validar
            </Button>
            {error && <Typography color="error">{error}</Typography>}
            {discount > 0 && <Typography variant="body1">Desconto: {discount} %</Typography>}
        </CardContent>
        
   {/*teste */}                                     
                                        <Typography variant="h7">
                                            Total: 
                                        </Typography>



                                        <Divider variant="fullWidth" />
                                        <Typography variant="h7">
                                            R$  {calculateFinalAmount().toFixed(2)}
                                        </Typography>
                                        
                                        <Toolbar />
                                        <Grid item xs={12} container >  
                                            <Button   onClick={handleSubmit} variant="contained" color="primary" sx={{ marginLeft: '10px' }}>
                                                Pague agora
                                            </Button>
                                            <Pagamento open={openModal} handleClose={handleCloseModal} />
                                        </Grid>
                                </CardContent>

                            </Grid>
                </Card>


            

            </Grid>

            <RightBar />
        </Grid>
        </div>

    )
}

export default Checkout;
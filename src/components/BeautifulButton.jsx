import Button from '@mui/material/Button';

function BeautifulButton({ children, onClick }){


    return (

        <>
        <Button variant="contained" color="primary" sx={{ marginLeft: 'auto' }} onClick={onClick}>
            {children}
                       
        </Button>
        
        </>
    )
}


export default BeautifulButton;
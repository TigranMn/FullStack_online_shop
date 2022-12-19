import { Button,CardContent, Grid, TextField,Typography } from '@mui/material';
import {useState} from 'react';

export default function Buy() {
   const [userName, setUserName] = useState('');
   const [userLastName, setUserLastName] = useState('');
   const [isVerified, setIsVerified] = useState(false);


   return <div style={{
    minHeight: '100vh',
    background: '#1A202C',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'}}>
      {!isVerified ? <CardContent sx={{width:'506px', height: '319px', background: '#fff', padding: '40px 30px',borderRadius: '30px'}}>
            <Typography variant='h6' sx={{textAlign: 'center', color: '#115A2B' }}>Please confirm your details</Typography>
            <form autoComplete='off'>
               <Grid container spacing={4}>
                  <Grid xs={12} item>
                     <TextField
                        label='First Name'
                        placeholder='Enter your name'
                        fullWidth
                        required
                        onChange={(e) => setUserName(e.target.value)}
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        label='Last Name'
                        placeholder='Enter your last name'
                        fullWidth
                        required
                        onChange={(e) => setUserLastName(e.target.value)}
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <Button
                        sx={{
                           background: '#212834',
                           '&:hover': { background: 'rgba(33,40,52,0.9)' }
                        }}
                        type='submit'
                        variant='contained'
                        fullWidth
                        onClick={()=> {
                           if(userName !== '' && userLastName !== '') {
                              setIsVerified(true);
                           }
                        }}
                     >
                        Submit
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </CardContent> :  <div style={{
         width: '506px',
         height: '319px',
         position: 'relative',
         background: 'radial-gradient(140% 140% at 0% 0%, rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100% )',
         borderTop: '1px solid #eeeded70',
         borderLeft: '1px solid #eeeded70',
         borderRadius: '30px',
         backdropFilter: 'blur(30px)',
         boxShadow: '0 15px 25px rgba(0,0,0,0.3)'
      }}>
      <h3 style={{color: '#fff', fontSize : '28px', fontFamily: 'Aboreto',opacity : 0.7, position: 'absolute',top: '30px',right: '30px'}}>bank</h3>
      <img style={{width: '50px', position: 'absolute', top: '100px',left: '40px'}} src='https://cdn-icons-png.flaticon.com/512/6404/6404100.png' alt='chip' />
      <img style={{width: '40px', position: 'absolute', top: '105px',left: '100px', rotate: '90deg'}} src='https://cdn-icons-png.flaticon.com/512/4399/4399290.png' alt='indicator' />
      <h3 style={{ color: '#fff', fontSize: '36px',fontFamily: 'Aboreto',opacity : 0.3, fontWeight: 400, position: 'absolute',bottom: '100px', left: '30px'}}>7500 6789 2549 0057</h3>
      <h5 style={{color: '#fff', fontSize: '14px', fontFamily: 'cursive', opacity: 0.7, fontWeight: 700,position: 'absolute',bottom: '30px', left: '30px'}}><span style={{ fontFamily: 'cursive', fontSize:'10px', fontWeight: 400}}>CARD HOLDER</span><br /> {userName} {userLastName}</h5>
      <h5 style={{color: '#fff', fontSize: '14px', fontFamily: 'cursive', opacity: 0.7, fontWeight: 400,position: 'absolute',bottom: '30px', left: '220px'}} >EXPIRY DATE <br /> 24/07</h5>
      <img style={{width: '70px', position: 'absolute', right: '30px', bottom: '25px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/772px-Mastercard-logo.svg.png?20210817144358' alt='logo-cart' />
      </div>}
         
     
            
   </div>;
}

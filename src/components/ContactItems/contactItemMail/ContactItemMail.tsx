//MUI
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';

export default function ContactItemMail() {
   return (
      <Card
         sx={{
            maxWidth: 500,
            margin: '20px auto',
            padding: '20px 5px',
            border: '3px solid #212834',
            background: 'rgba(33,40,52,0.1)'
         }}
      >
         <CardContent>
            <form autoComplete='off'>
               <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item sx={{ color: 'red' }}>
                     <TextField
                        label='First Name'
                        placeholder='Enter your name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                     <TextField
                        label='Last Name'
                        placeholder='Enter your last name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        type='email'
                        label='Email'
                        placeholder='Enter email'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        type='tel'
                        label='Phone'
                        placeholder='Enter phone number'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        label='Message'
                        multiline
                        rows={4}
                        placeholder='Type your message here'
                        fullWidth
                        required
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
                     >
                        Submit
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </CardContent>
      </Card>
   );
}

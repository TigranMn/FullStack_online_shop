//MUI
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';

export default function Contact() {
   return (
      <Card sx={{ maxWidth: 500, margin: '20px auto', padding: '20px 5px' }}>
         <CardContent>
            <form>
               <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                     <TextField
                        color='success'
                        label='First Name'
                        placeholder='Enter your name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                     <TextField
                        color='success'
                        label='Last Name'
                        placeholder='Enter your last name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        color='success'
                        type='email'
                        label='Email'
                        placeholder='Enter email'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        color='success'
                        type='tel'
                        label='Phone'
                        placeholder='Enter phone number'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        color='success'
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
                           background: 'rgb(103,173,75)',
                           '&:hover': { background: 'rgba(103,173,75,0.8)' }
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

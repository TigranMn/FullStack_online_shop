//MUI
import { Button, Card, CardContent, Grid, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function ContactItemMail() {
   const { t } = useTranslation();

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
                        label={t('firstName')}
                        placeholder='Enter your name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                     <TextField
                        label={t('lastName')}
                        placeholder='Enter your last name'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        type='email'
                        label={t('email')}
                        placeholder='Enter email'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        type='tel'
                        label={t('phone')}
                        placeholder='Enter phone number'
                        fullWidth
                        required
                     />
                  </Grid>
                  <Grid xs={12} item>
                     <TextField
                        label={t('message')}
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
                        {t('submit')}
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </CardContent>
      </Card>
   );
}

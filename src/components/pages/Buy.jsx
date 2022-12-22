import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../store';
import { getProduct } from '../../api/api';
import { Button } from '@mui/material';

function TabPanel(props) {
   const { children, value, index, ...other } = props;

   return (
      <div
         role='tabpanel'
         hidden={value !== index}
         id={`simple-tabpanel-${index}`}
         aria-labelledby={`simple-tab-${index}`}
         {...other}
      >
         {value === index && (
            <Box sx={{ p: 3 }}>
               <div
                  style={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     justifyContent: 'center'
                  }}
               >
                  {children}
               </div>
            </Box>
         )}
      </div>
   );
}

TabPanel.propTypes = {
   children: PropTypes.node,
   index: PropTypes.number.isRequired,
   value: PropTypes.number.isRequired
};

function a11yProps(index) {
   return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`
   };
}

export default function Buy() {
   const [value, setValue] = React.useState(0);
   const { t } = useTranslation();
   const [products, setProducts] = useState([]);
   const basket = useAppSelector((state) => state.user.basket);

   useEffect(() => {
      let result = [];
      basket.forEach(async (item) => {
         const product = await getProduct(item.category, item.productId);
         result.push({ ...product, count: item.count });
      });
      setProducts(result);
   }, []);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <Box
         sx={{
            width: '100%',
            height: '75vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
         }}
      >
         <h1 style={{ textAlign: 'center', margin: '50px' }}> {t('methodBuying')}</h1>
         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
               <Tab label='MasterCard' {...a11yProps(0)} />
               <Tab label='Visa Debit Cards' {...a11yProps(1)} />
               <Tab label='Idram' {...a11yProps(2)} />
               <Tab label='Demo Buy' {...a11yProps(3)} />
            </Tabs>
         </Box>
         <TabPanel value={value} index={0}>
            <img
               src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/800px-Mastercard-logo.svg.png'
               alt='visacard'
               width='200px'
            />
            <h1 style={{ margin: '20px' }}>{t('cardError')}</h1>
         </TabPanel>
         <TabPanel value={value} index={1}>
            <img
               src='https://1000logos.net/wp-content/uploads/2021/11/VISA-logo.png'
               alt='visacard'
               width='200px'
            />
            <h1 style={{ margin: '20px' }}>{t('cardError')}</h1>
         </TabPanel>
         <TabPanel value={value} index={2}>
            <img
               src='https://www.idram.am/assets/icons/og-idram.png'
               alt='visacard'
               width='200px'
            />
            <h1 style={{ margin: '20px' }}>{t('cardError')}</h1>
         </TabPanel>
         <TabPanel value={value} index={3}>
            <h2>Вы действительно хотите купить эти продукты</h2>
            <br />
            <div>
               {products?.map((product) => {
                  return (
                     <h3 key={product.name}>
                        {product.name}: x{product.count}
                     </h3>
                  );
               })}
            </div>
            <br />
            <p>
               {'за '}
               {products.reduce((current, item) => {
                  return current + item.price * item.count;
               }, 0)}
               {' $ ?'}
            </p>
            <br />
            <Button variant='outlined'>Buy</Button>
         </TabPanel>
      </Box>
   );
}

//Hooks
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store';
//Components
import ProductItem from './ProductItem';
import Search from '../Search/Search';
//Actions
import { fetchProducts } from '../../redux/productsSlice';
//MUI
import {
   Container,
   Grid,
   Typography,
   Box,
   InputLabel,
   FormControl,
   Select,
   MenuItem,
   SelectChangeEvent,
   TextField
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
//Types
import { TProduct } from '../../types';
import MyPagination from '../Pagination/Pagination';

export default function ProductsList() {
   const { category } = useParams();
   const [itemCount, setItemCount] = useState<number>(6);
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [pages, setPages] = useState<number>(1);
   const [pageProducts, setPageProducts] = useState<TProduct[]>([]);
   const products = useAppSelector((state) => state.products);
   const dispatch = useAppDispatch();
   const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

   useEffect(() => {
      setPages(Math.ceil(filteredProducts.length / itemCount));
      const pageProducts = filteredProducts.slice(
         (currentPage - 1) * itemCount,
         currentPage * itemCount
      );
      setPageProducts(pageProducts);
   }, [itemCount, pages, filteredProducts, currentPage]);

   useEffect(() => {
      setFilteredProducts(products.products);
   }, [products]);

   useEffect(() => {
      dispatch(fetchProducts(category as string));
   }, [dispatch]);

   const handleSearch = (text: string) => {
      setCurrentPage(1);
      const searched = products.products.filter((el) =>
         el.name.toLowerCase().startsWith(text.toLowerCase())
      );
      setFilteredProducts(searched);
   };

   const [gender, setGender] = useState('all');
   const [brand, setBrand] = useState('brand1');

   const handleChangeGender = (event: SelectChangeEvent) => {
      setGender(event.target.value as string);
   };

   const handleChangeBrand = (event: SelectChangeEvent) => {
      setBrand(event.target.value as string);
   };

   return (
      <>
         <Container>
            <Search handleSearch={handleSearch} />
            <br />
            <br />
            <FormControl style={{ width: '100px' }}>
               <InputLabel>Pages</InputLabel>
               <Select
                  value={itemCount}
                  label='Pages'
                  onChange={(e) => setItemCount(+e.target.value)}
               >
                  <MenuItem value={6}>6</MenuItem>
                  <MenuItem value={9}>9</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
               </Select>
            </FormControl>
            <br />
            <br />
            <div className='productsWrapper'>
               <div className='filter'>
                  <Box sx={{ minWidth: 120 }}>
                     <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>Brand</InputLabel>
                        <Select
                           labelId='demo-simple-select-label'
                           id='demo-simple-select'
                           value={brand}
                           label='Brand'
                           onChange={handleChangeBrand}
                        >
                           <MenuItem value={'brand1'}>Brand_1</MenuItem>
                           <MenuItem value={'brand2'}>Brand_2</MenuItem>
                           <MenuItem value={'brand3'}>Brand_3</MenuItem>
                        </Select>
                     </FormControl>
                  </Box>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                     <FormControl fullWidth>
                        <InputLabel id='demo-simple-select-label'>Gender</InputLabel>
                        <Select
                           labelId='demo-simple-select-label'
                           id='demo-simple-select'
                           value={gender}
                           label='Gender'
                           onChange={handleChangeGender}
                        >
                           <MenuItem value={'male'}>Male</MenuItem>
                           <MenuItem value={'female'}>Female</MenuItem>
                           <MenuItem value={'all'}>All</MenuItem>
                        </Select>
                     </FormControl>
                  </Box>
                  <Box
                     style={{
                        padding: '20px',
                        borderRadius: '5px',
                        marginLeft: '-15px'
                     }}
                  >
                     <InputLabel id='demo-simple-select-label'>Price</InputLabel>
                     <TextField id='standard-basic' label='Min' variant='standard' />
                     <TextField id='standard-basic' label='Max' variant='standard' />
                  </Box>
               </div>
               <Grid container justifyContent='center' sx={{ margin: '20px 4px 20px 4px' }}>
                  <Grid
                     container
                     display={'flex'}
                     spacing={{ xs: 2, md: 16 }}
                     justifyContent='center'
                     marginBottom={'2rem'}
                  >
                     {products.isLoading ? (
                        <Box sx={{ display: 'flex' }}>
                           <CircularProgress sx={{ width: '100%' }} />
                        </Box>
                     ) : products.isError ? (
                        <Typography>Something went wrong</Typography>
                     ) : !products.products.length ? (
                        <span>Nothing found</span>
                     ) : (
                        pageProducts.map((product) => {
                           return <ProductItem key={product.id} product={product} />;
                        })
                     )}
                  </Grid>
                  {products.products.length ? (
                     <MyPagination
                        onChange={setCurrentPage}
                        pages={pages}
                        currentPage={currentPage}
                     />
                  ) : null}
               </Grid>
            </div>
         </Container>
      </>
   );
}

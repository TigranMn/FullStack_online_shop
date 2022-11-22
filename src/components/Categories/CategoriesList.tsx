import React, { useEffect } from 'react';
import CategoryItem from './CategoryItem';
import { getCategories } from '../../redux/categoriesSlice';
import { useAppDispatch, useAppSelector } from '../../store';

export default function CategoriesList() {
   const state = useAppSelector((state) => state.categories);
   const dispatch = useAppDispatch();
   useEffect(() => {
      dispatch(getCategories());
   }, [dispatch]);

   return (
      <div>
         {state.isLoading && <span>...Loading</span>}
         {state.isError ? (
            <span>Something went wrong</span>
         ) : (
            state.categories.map((el) => {
               return (
                  <CategoryItem
                     key={Math.random()}
                     category={el.name}
                  ></CategoryItem>
               );
            })
         )}
      </div>
   );
}

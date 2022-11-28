import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Category, CategoryName } from './styles'

type TCategoryItemProps = {
   category: string;
};

const CategoryItem: FC<TCategoryItemProps> = ({ category }) => {
   return (
      <Link to={`/shop/${category.toLowerCase()}`}>
         <Category> 
            <CategoryName variant='h4'>{category}</CategoryName>
         </Category>
      </Link>
   );
};

export default CategoryItem;

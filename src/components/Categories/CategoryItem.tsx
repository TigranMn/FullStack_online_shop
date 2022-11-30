import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Category, CategoryName } from './styles';

type TCategoryItemProps = {
   category: {
      name: string;
      imgUrl: string;
      description: string;
      id: string;
   };
};

const CategoryItem: FC<TCategoryItemProps> = ({ category }) => {
   return (
      <Link to={`/shop/${category.name.toLowerCase()}`}>
         <Category>
            <img width={'150px'} src={category.imgUrl} alt="hahhahahha" />
            <CategoryName variant="h4">{category.name}</CategoryName>
         </Category>
      </Link>
   );
};

export default CategoryItem;

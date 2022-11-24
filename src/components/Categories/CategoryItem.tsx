import React, { FC } from 'react';
import { Link } from 'react-router-dom';

type TCategoryItemProps = {
   category: string;
};

const CategoryItem: FC<TCategoryItemProps> = ({ category }) => {
   // return <Link to={`/shop/${category.toLowerCase()}`}>{category}</Link>;
   return (
      <Link to={`/shop/${category.toLowerCase()}`}>
         <h2>product</h2>
         {category}
      </Link>
   );
};

export default CategoryItem;

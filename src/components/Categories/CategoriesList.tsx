import React from 'react';
import { categories } from '../../data/database';
import CategoryItem from './CategoryItem';


export default function Categories() {
  return (
    <div>
      {categories.map((el) => {
        return <CategoryItem key={Math.random()} category={el}></CategoryItem>;
      })}
    </div>
  );
}

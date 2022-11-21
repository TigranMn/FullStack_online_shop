import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import database from '../../data/database';
import ProductItem from './ProductItem';

export default function ProductsList() {
	const { category } = useParams();

	const categoryProducts = database.products.filter(el => el.category === category)

	return (
		<div className="products">
			{categoryProducts
				.map((product) => {
					return <ProductItem key={+product.productId} product={product} />;
				})}
		</div>
	);
}

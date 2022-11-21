import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Product } from "../../data/database";

type ProductItemProps = {
	product: Product
}

export default function ProductItem({ product }: ProductItemProps) {

	const navigate = useNavigate()
	const { pathname } = useLocation()


	const changeLocation = () => {
		navigate(pathname + `/${product.productId}`)
	}

	return (
		<div onClick={changeLocation} key={+product.productId} className="product">
			<img src={product.url} alt="AHAHAHAHA" />
			<h1>{product.productName}</h1>
			<h3>{product.price}</h3>
		</div>)
}

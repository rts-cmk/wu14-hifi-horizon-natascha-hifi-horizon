import { Link, useLoaderData } from 'react-router'
import { FiSliders } from "react-icons/fi";
import ProductItem from '../ProductItem/ProductItem'
import './Products.sass'
import { use } from 'react';


export default function Products() {

    const products = useLoaderData();
    // console.log(products);


    return (
        <section className="products">

            {/* <SortBy /> */}
            
            <section className="products__items">
                {products && products.length > 0 ? (
                    products.map((product) => (
                    <ProductItem product={product} key={product.id}>
                        {/* add compare button */}
                        <div className="product-item__compare">
                            <p>Compare</p>
                            <FiSliders className='product-item__compare-icon' />
                        </div>
                        <div className="product-item__cart-info">
                            {/* add 'add to cart' button */}
                            <button className="product-item__button">Add to cart</button>
                            <p className="product-item__stock">
                                In Stock{" "}
                                {/* if inStock is true, show green dot, else show red dot */}
                                <span style={{ backgroundColor: product.inStock ? "green" : "red" }}>
                                    {product.inStock ? "" : ""}
                                </span>
                            </p>
                        </div>

                        {/* button for adding item to cart */}
                        {/* <button onClick={() => addToCart(product.id, product.image, product.name, product.price)} className="product-item__button">
                            Add to cart
                        </button> */}
                    </ProductItem>
                ))
                ) : (
                    <section className="shop__no-products">
                    <h3>No products have been found</h3>
                    </section>
                )}
            </section>

        </section>
    )
}
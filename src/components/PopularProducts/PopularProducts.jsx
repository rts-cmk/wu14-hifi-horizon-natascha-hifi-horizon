import { Link, useLoaderData } from 'react-router'
import './PopularProducts.sass'
import ProductItem from '../ProductItem/ProductItem'


export default function PopularProducts() {

    const products = useLoaderData();
    // console.log(products);

    // Get top 4 popular products based on views
    const popularProducts = products.sort((a, b) => b.views - a.views).slice(0, 4);
    // console.log(popularProducts);

    return (
        <section className="popular-products">
            <section className="popular-products__header">
                <h2 className="popular-products__title">Popular Products</h2>
                <Link to={"/shop"} className="popular-products__button">
                    See all products
                </Link>
            </section>
            
            <section className="popular-products__items">
                {popularProducts && popularProducts.length > 0 ? (
                    popularProducts.map((product) => (
                    <ProductItem product={product} key={product.id}>
                        <Link to={`/shop/${product.id}`} className="product-item__button">
                            Read more
                        </Link>
                    </ProductItem>
                ))
                ) : (
                    <section className="popular-products__no-products">
                    <h3>No products have been found</h3>
                    </section>
                )}
            </section>
        </section>
    )
}
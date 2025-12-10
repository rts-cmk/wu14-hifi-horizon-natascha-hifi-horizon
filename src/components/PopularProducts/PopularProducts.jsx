import { Link } from 'react-router'
import './PopularProducts.sass'
import ProductItem from '../ProductItem/ProductItem'


export default function PopularProducts() {
    return (
        <section className="popular-products">
            <section className="popular-products__header">
                <h2 className="popular-products__title">Popular Products</h2>
                <Link to={"/products"} className="popular-products__button">
                    See all products
                </Link>
            </section>
            
            <div className="popular-products__items">
                <ProductItem />
            </div>
        </section>
    )
}
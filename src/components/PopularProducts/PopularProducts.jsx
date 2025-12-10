import { Link } from 'react-router'
import './PopularProducts.sass'


export default function PopularProducts() {
    return (
        <section className="popular-products">
            <h2 className="popular-products__title">Popular Products</h2>
            <Link to={"/products"} className="popular-products__view-all">
                See all products
            </Link>
            <div className="popular-products__items">
                {/* Product items would go here */}
            </div>
        </section>
    )
}
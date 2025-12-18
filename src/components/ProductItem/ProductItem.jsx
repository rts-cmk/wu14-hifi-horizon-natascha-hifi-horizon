import { Link } from 'react-router';
import './ProductItem.sass';


export default function ProductItem({ product, children }) {
    return (
        <article className="product-item" key={product.id}>
            <img src={product.image[0]} alt={product.name} className="product-item__image" />
            <section className="product-item__details">
                <Link to={`/shop/${product.id}`} className="product-item__link">
                    <h3 className="product-item__name">{product.name}</h3>
                </Link>
                <p className='product-item__output'>({product.output} output)</p>
                <p className="product-item__price">£ {product.price}</p>
                {children}
            </section>
        </article>
    );
}
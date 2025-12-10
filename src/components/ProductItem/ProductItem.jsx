import './ProductItem.sass';


// export default function ProductItem({ product }) {
//     return (
//         <div className="product-item">
//             <img src={product.image} alt={product.name} className="product-item__image" />
//             <h3 className="product-item__name">{product.name}</h3>
//             <p className="product-item__price">${product.price.toFixed(2)}</p>
//             <button className="product-item__add-to-cart-button">Add to Cart</button>
//         </div>
//     );
// }

export default function ProductItem() {
    return (
        <div className="product-item">
            <img src="https://via.placeholder.com/150" alt="Product Name" className="product-item__image" />
            <h3 className="product-item__name">Product Name</h3>
            <p className="product-item__price">$99.99</p>
            <button className="product-item__add-to-cart-button">Add to Cart</button>
        </div>
    );
}
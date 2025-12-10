import { useLoaderData } from "react-router"
import ProductItem from "../components/ProductItem/ProductItem";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Products() {

    const products = useLoaderData();

    return (
        <>
            <Header />

            <main className="products">

                <section className="products__items">
                    {products && products.length > 0 ? (
                        products.map((product) => (
                        <ProductItem product={product} key={product.id}>
                            {/* add compare buttun */}
                            <div className="product_item-compare">
                                <p>Compare</p>
                                icon
                            </div>
                            {/* add 'add to cart' button */}
                            <button className="product-item__button">Add to cart</button>

                            {/* button for adding item to cart */}
                            {/* <button onClick={() => addToCart(product.id, product.image, product.name, product.price)} className="product-item__button">
                                Add to cart
                            </button> */}
                        </ProductItem>
                    ))
                    ) : (
                        <section className="products__no-products">
                        <h3>No products have been found</h3>
                        </section>
                    )}
                </section>

            </main>

        <Footer />
        </>
        
    )

}
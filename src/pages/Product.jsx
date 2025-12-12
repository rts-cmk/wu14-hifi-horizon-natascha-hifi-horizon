import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../style/_layout.sass'



export default function Product() {

    const products = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    
    const product = products.find(p => p.id == id);
    // console.log(product);

    return (
        <>
            <Header />

            <main className="product">
                <h1>Product</h1>
                {product ? (
                    <>
                        <h2>{product.name}</h2>
                        <img src={product.image} alt={product.name} />
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </>
                ) : (
                    <h2>Product not found</h2>
                )}
            </main>

            <Footer />
        </>
        
    )
}
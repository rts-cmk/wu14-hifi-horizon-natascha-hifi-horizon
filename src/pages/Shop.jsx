import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../style/_layout.sass'
import Products from "../components/Products/Products";



export default function Shop() {

    return (
        <>
            <Header />

            <main className="shop">

                <h1>Products</h1>

                <Products />

            </main>

        <Footer />
        </>
        
    )

}
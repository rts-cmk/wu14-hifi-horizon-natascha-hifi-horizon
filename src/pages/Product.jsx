import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Details from "../components/Details/Details";
import Specifications from "../components/Specifications/Specifications";
import '../style/_layout.sass'
import Compare from "../components/Compare/Compare";



export default function Product() {

    return (
        <>
            <Header />

            <main className="product">
                <h1>Product</h1>

                <Details />

                <Specifications />
                
            </main>

            <Compare />

            <Footer />
        </>
        
    )
}
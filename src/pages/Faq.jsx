import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import '../style/_layout.sass'
import FaqDetails from "../components/FaqDetails/FaqDetails"


export default function Faq() {

    return (
        <>
            <Header />
            
            <main className="faq">

                <h1>FAQ</h1>

                <FaqDetails />

            </main>
            
            <Footer />
        </>
    )
}

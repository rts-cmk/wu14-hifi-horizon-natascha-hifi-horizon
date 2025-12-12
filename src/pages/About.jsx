import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import '../style/_layout.sass'
import OurHistory from "../components/OurHistory/OurHistory";


export default function About() {

    return (
        <>
            <Header />

            <main className="about">

                <h1>Our history</h1>

                <OurHistory />

            </main>

            <Footer />
        </>
    )
}
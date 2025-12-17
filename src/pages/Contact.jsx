import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import '../style/_layout.sass'
import ContactForm from "../components/ContactForm/ContactForm"


export default function Contact() {

    return (
        <>
            <Header />
            
            <main className="contact">

                <h1>get in touch with us</h1>
                
                <ContactForm />

                <p className="contact__paragraph">Visit our sister companies <a href="#">Home Sound</a> and <a href="#">The Movie Rooms</a> part of the HiFi Horizon Group. </p>
            
            </main>
            
            <Footer />
        </>
    )
}
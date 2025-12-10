import Header from '../components/Header/Header.jsx'
import Footer from '../components/Footer/Footer.jsx'
import Hero from '../components/Hero/Hero.jsx'
import PopularProducts from '../components/PopularProducts/PopularProducts.jsx'

export default function Home() {
    
    return (
        <>
            <Header />

            <main className="home">
                <Hero />
                <PopularProducts />

                {/* <AboutUs /> */}

                {/* <Newsletter /> */}


            </main>
            
            <Footer />

        </>
    )

}
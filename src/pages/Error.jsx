import Header from "../components/Header/Header";


export default function Error() {
    return (
        <>
            <Header />
            <main className="error">
                <h1>404 - Page Not Found</h1>
                <p>Sorry, the page you are looking for does not exist.</p>
            </main>
            {/* <Footer /> */}
        </>
    )
} 
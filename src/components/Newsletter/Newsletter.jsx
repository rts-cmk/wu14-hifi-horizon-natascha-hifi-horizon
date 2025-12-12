import './Newsletter.sass';


export default function Newsletter() {
    return (
        <section className="newsletter">
            <h2 className="newsletter__title">SIGN UP FOR OUR NEWSLETTER</h2>
            <p className="newsletter__description">Subscribing to our newsletter secures you up to date information about HiFi Horizons latest updates and offers.</p>
            <form className="newsletter__form">
                <input type="email" className="newsletter__input" placeholder='Email' required/>
                <button type="submit" className="newsletter__button">Sign up</button>
            </form>
        </section>
    );
}
import { Link } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import './Footer.sass'



export default function Footer() {
    return (
        <footer className='footer'>

            <nav className='footer__nav'>
                <Link to="/" className="footer__nav-link">
                    Home
                </Link>
                <Link to="/shop" className="footer__nav-link">
                    Shop
                </Link>
                <Link to="/about" className="footer__nav-link">
                    About Us
                </Link>
                <Link to="/faq" className="footer__nav-link">
                    FAQ
                </Link>
            </nav>
            
            <section className='footer__support'>
                <a href="/faq">returns and refunds</a>
                <a href="/faq">delivery</a>
                <a href="/faq">privacy policy</a>
                <a href="/faq">terms & conditions</a>
            </section>
            
            <section className='footer__contact'>
                <h3>Contact</h3>
                <div className='footer__address'>
                    <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                    <div className="footer__phone">
                        <FaPhoneAlt  className="footer__phone-icon" />
                        <p>0131 556 7901</p>
                    </div>
                </div>
                <div className='footer__address'>
                    <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <div className="footer__phone">
                        <FaPhoneAlt  className="footer__phone-icon" />
                        <p>01324 629 011</p>
                    </div>
                </div>
                <div className='footer__socials'>
                    <FaFacebookSquare className="footer__socials-icon" />
                    <FaSquareTwitter className="footer__socials-icon" />
                    <FaInstagramSquare className="footer__socials-icon" />
                    <FaYoutubeSquare className="footer__socials-icon" />
                </div>
            </section>

            <section className='footer__payments'>
                <div className='footer__methods'>
                    <FaCcStripe className="footer__methods-icon" />
                    <FaCcVisa className="footer__methods-icon" />
                    <FaCcMastercard className="footer__methods-icon" />
                </div>
                <p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
            </section>

        </footer>
    )
}
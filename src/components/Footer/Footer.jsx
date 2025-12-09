import { FaPhoneAlt } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
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
                <a href="/">Home</a>
                <a href="/shop">Shop</a>
                <a href="/about">About Us</a>
            </nav>
            
            <section className='footer__support'>
                <a href="#">returns & refunds</a>
                <a href="#">delivery</a>
                <a href="#">privacy policy</a>
                <a href="#">terms & conditions</a>
            </section>
            
            <section className='footer__contact'>
                <h3>Contact</h3>
                <div className='footer__address'>
                    <p>2 Joppa Rd, Edinburgh, EH15 2EU</p>
                    <div className="phone">
                        <FaPhoneAlt />
                        <p>0131 556 7901</p>
                    </div>
                </div>
                <div className='footer__address'>
                    <p>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                    <div className="phone">
                        <FaPhoneAlt />
                        <p>01324 629 011</p>
                    </div>
                </div>
                <div className='footer__socials'>
                    <ImFacebook2 />
                    <FaSquareTwitter />
                    <FaInstagramSquare />
                    <FaYoutubeSquare />
                </div>
            </section>

            <section className='footer__payments'>
                <div className='footer__methods'>
                    <FaCcStripe />
                    <FaCcVisa />
                    <FaCcMastercard />
                </div>
                <p>HiFi Horizon (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
            </section>

        </footer>
    )
}
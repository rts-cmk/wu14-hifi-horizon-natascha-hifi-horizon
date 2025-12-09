import { IoSearchSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";

import hifi_logo from '../../assets/images/logo.png'
import './Header.sass'

export default function Header() {
   
    const toggleMenu = (event) => {
        console.log('toggle menu');
        event.currentTarget.classList.toggle('header__burger-menu--active');
        event.currentTarget.querySelector('nav').classList.toggle('header__nav--active');
    };

    const isActive = false;

    return (
        <header className='header'>
                
                <section className='header__search icon'>
                    <IoSearchSharp />
                </section>
                    
                <section className='header__user icon'>
                    <HiUser />
                </section>

                <section className='header__cart icon'>
                    <FaShoppingCart />
                </section>
                
                <section onClick={toggleMenu} className={isActive
                     ? "header__burger-menu--active" : "header__burger-menu"
                }>    
                    <section>
                        <div></div>
                        <div></div>
                        <div></div>
                    </section>

                    <nav className='header__nav'>
                        <a href="/"><img src={hifi_logo} alt="hifi_logo" /></a>
                        <a href="/shop">Shop</a>
                        <a href="/about">About Us</a>
                        <a href="/contact">Contact Us</a> 
                    </nav>
                </section>

        </header>
    )
}
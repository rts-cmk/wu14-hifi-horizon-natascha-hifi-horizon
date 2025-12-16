import { NavLink } from "react-router";
import { IoSearchSharp } from "react-icons/io5";
import { HiUser } from "react-icons/hi2";
import { FaShoppingCart } from "react-icons/fa";
import hifi_logo from '../../assets/icons/logo.png'
import './Header.sass'


export default function Header() {
   
    // function to toggle burger menu active state
    const toggleMenu = (event) => {
        event.currentTarget.classList.toggle('header__burger-menu--active');
        event.currentTarget.querySelector('nav').classList.toggle('header__nav--active');
    };

    // bool for burger menu active state (set to --active if menu is open)
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
                    <section className='header__burger-lines'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </section>

                    <nav className='header__nav'>
                        <a href="/" className="header__navigation-icon"><img src={hifi_logo} alt="hifi_logo" /></a>
                        <NavLink to="/shop" 
                            className={({ isActive }) =>
                                `header__navigation-icon ${isActive ? "header__navigation-icon--active" : "header__navigation-icon"}`
                            }
                            end >
                            Shop
                        </NavLink>
                        <NavLink to="/about" 
                            className={({ isActive }) =>
                                `header__navigation-icon ${isActive ? "header__navigation-icon--active" : "header__navigation-icon"}`
                            }
                            end >
                            About Us
                        </NavLink>
                        <NavLink to="/contact" 
                            className={({ isActive }) =>
                                `header__navigation-icon ${isActive ? "header__navigation-icon--active" : "header__navigation-icon"}`
                            }
                            end >
                            Contact Us
                        </NavLink> 
                    </nav>
                </section>

        </header>
    )
}
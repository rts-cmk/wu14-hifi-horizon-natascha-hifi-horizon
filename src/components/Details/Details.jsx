import { useLoaderData } from "react-router";
import { useState } from "react";
import { FiSliders } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import './Details.sass';


export default function Details() {

    const product = useLoaderData();

    const selectedColor = (event) => {
        const allColors = document.querySelectorAll('.details__color-span--active');
        allColors.forEach(span => span.classList.remove('details__color-span--active'));
        event.currentTarget.classList.add('details__color-span--active');
    };

    // bool for burger menu active state (set to --active if menu is open)
    const isActive = false;

    const [current, setCurrent] = useState(0);

    const prevImage = () => {
        setCurrent((prev) =>
            prev === 0 ? product.image.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrent((prev) =>
            prev === product.image.length - 1 ? 0 : prev + 1
        );
    };

    // Quantity state
    const [quantity, setQuantity] = useState(1);

    
    return (
        product ? (
            <article className="details">
                
                <section className="details__compare">
                    <p>Compare</p>
                    <FiSliders className='details__compare-icon' />
                </section>

                {/* slider for images */}
                <section className="details__images-slider">
                    <button className="slider__btn slider__btn--left" onClick={prevImage}><FaAngleLeft /></button>

                    {/* container to hold all images */}
                    <section className="details__images">
                        {/* track for making the sliding effect */}
                        <div className="details__images-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                            {product.image.map((img, index) => (
                                <img key={index} src={img} alt={product.name} className="image"/>
                            ))}
                        </div>
                    </section>

                    <button className="slider__btn slider__btn--right" onClick={nextImage}><FaAngleRight /></button>
                    
                    {/* slider dots */}
                    <section className="slider__dots">
                        {product.image.map((_, index) => (
                            <button key={index} className={`dot ${index === current ? "active" : ""}`} onClick={() => setCurrent(index)} />
                        ))}
                    </section>
                </section>
                
                <section className="details__info">
                    
                    <section className="details__title">
                        <h2>{product.name}</h2>
                        <p>({product.output})</p>
                    </section>

                    <section className="details__descriptions">
                        {product.descriptions.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))}
                    </section>

                    <section className="details__colors">
                        {product.colors.map((color, index) => (
                            // details__color--active when color is selected
                            <div key={index} className="details__color">
                                <span key={index} onClick={selectedColor} className={`details__color-span ${isActive ? "details__color-span--active" :  "details__color-span"}`} style={{ backgroundColor: color.toLowerCase() }}></span>
                                <p>{color}</p>
                            </div>
                        ))}
                    </section>

                    <section className="details__pricing-stock">
                        <p className="details__price">{product.price}</p>
                        <p className="details__stock">
                            In Stock{" "}
                            {/* if inStock is true, show green dot, else show red dot */}
                            <span style={{ backgroundColor: product.inStock ? "green" : "red" }}>
                                {product.inStock ? "" : ""}
                            </span>
                        </p>
                    </section>
                    
                    <section className="details__purchase">

                        <div className="details__quantity">
                            {/* subtract button: reduce quantity by 1, but not below 1 */}
                            <FaMinus className="details__subtract" onClick={() => setQuantity(prev => Math.max(prev - 1, 1))} />
                            
                            {/* input fields: show the current quantity and allow only numbers between 1 and 10 */}
                            <input type="number" id="quantity" name="quantity" min="1" max="10" value={quantity}
                            onChange={(event) => {
                                // Ensures the input value always stays within 1-10, even if the user types manually
                                const value = Math.max(1, Math.min(10, Number(event.target.value)));
                                setQuantity(value);
                            }}/>
                            
                            {/* Plus button: increases quantity by 1, but stops at 10 to respect the maximum */}
                            <FaPlus className="details__add" onClick={() => setQuantity(prev => Math.min(prev + 1, 10))} />
                        </div>

                        <button className="details__button">Add to cart</button>
                        
                    </section>
                            
                </section>
            </article>
        ) : (
            <h2>Product not found</h2>
        )
    )

}
import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import { FiSliders } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import './Details.sass';


export default function Details() {

    const products = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    
    const product = products.find(p => p.id == id);
    // console.log(product);

    const selectedColor = (event) => {
        const allColors = document.querySelectorAll('.details__color-span--active');
        allColors.forEach(span => span.classList.remove('details__color-span--active'));
        event.currentTarget.classList.add('details__color-span--active');
    };

    // bool for burger menu active state (set to --active if menu is open)
    const isActive = false;

    // const [quantity, setQuantity] = useState(1);

    
    return (
        product ? (
            <article className="details">
                
                <section className="details__compare">
                    <p>Compare</p>
                    <FiSliders className='details__compare-icon' />
                </section>

                <section className="details__overview">
                    <section className="details__images">
                        {/* maybe change image in json to be an array?? */}
                        {/* and add random images */}
                        <img src={product.image} alt={product.name} />
                        {/* LOOP THROUGH IMAGES */}
                        {/* <img src={product.image} alt={product.name} /> */}
                        {/* <img src={product.image} alt={product.name} /> */}
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
                                <FaMinus className="details__subtract"/>
                                <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" />
                                <FaPlus className="details__add"/>
                            </div>
                            <button className="details__button">Add to cart</button>
                        </section>
                            
                    </section>
                </section>
            </article>
        ) : (
            <h2>Product not found</h2>
        )
    )
}
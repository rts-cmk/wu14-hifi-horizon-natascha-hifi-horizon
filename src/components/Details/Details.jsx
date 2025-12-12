import { useLoaderData, useParams } from "react-router";
import { useState } from "react";
import { FiSliders } from "react-icons/fi";
import './Details.sass';


export default function Details() {

    const products = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    
    const product = products.find(p => p.id == id);
    // console.log(product);

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
                        
                        <h2>{product.name}</h2>
                        <p>({product.output})</p>

                        {product.descriptions.map((description, index) => (
                            <p key={index}>{description}</p>
                        ))}

                        <section className="details__colors">
                            {product.colors.map((color, index) => (
                                <span key={index} className="color-swatch" style={{ backgroundColor: color.toLowerCase() }}></span>
                            ))}
                        </section>

                        <section className="details__purchase">
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
                            
                            <section className="details__actions">
                                <div className="details__quantity">
                                    <button>-</button>
                                    <input type="number" id="quantity" name="quantity" min="1" max="10" defaultValue="1" />
                                    <button>+</button>
                                </div>
                                <button className="details__button">Add to cart</button>
                            </section>
                            
                        </section>

                    </section>
                </section>
            </article>
        ) : (
            <h2>Product not found</h2>
        )
    )
}
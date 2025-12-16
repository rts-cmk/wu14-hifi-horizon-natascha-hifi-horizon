import { useLoaderData, useParams } from 'react-router';
import ProductItem from '../ProductItem/ProductItem';
import { FiSliders } from "react-icons/fi";
import './Compare.sass';


export default function Compare() {

    const product = useLoaderData();

    return (
        <section className="compare">
            <ProductItem product={product} >
                <button className='compare__remove-product'>X</button>
            </ProductItem>

            <section className="compare__button">
                <p>Compare</p>
                <FiSliders className='compare__icon' />
            </section>
        </section>
    );
}
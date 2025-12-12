import { useLoaderData, useParams } from 'react-router';
import './Specifications.sass';


export default function Specifications() {

    const products = useLoaderData();
    const { id } = useParams();
    // console.log(id);
    
    const product = products.find(p => p.id == id);
    // console.log(product);
    

    return (
        <section className="specifications">
            <h2 className="specifications__title">Product Specifications</h2>
            <ul className="specifications__list">
                <li className="specifications__item">
                    {product.specifications.dimensions && <p><strong>Dimensions:</strong> {product.specifications.dimensions}</p>}
                </li>
                <li>
                    {product.specifications.weight && <p><strong>Weight:</strong> {product.specifications.weight}</p>}
                </li>
                <li>
                    {product.specifications.power_consumption && <p><strong>Power Consumption:</strong> {product.specifications.power_consumption}</p>}
                </li>
                <li>
                    {product.specifications.supported_formats && <p><strong>Supported Formats:</strong> {product.specifications.supported_formats}</p>}
                </li>
            </ul>
        </section>
    );
}
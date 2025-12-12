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
            <table className="specifications__table">
                <thead>
                    <tr>
                        <th colSpan="2" className="specifications__title">Product Specifications</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='specifications__spec-name'><strong>Dimensions</strong></td>
                        <td className='specifications__spec-value'>{product.specifications.dimensions}</td>
                    </tr>
                    <tr>
                        <td className='specifications__spec-name'><strong>Weight</strong></td>
                        <td className='specifications__spec-value'>{product.specifications.weight}</td>
                    </tr>
                    <tr>
                        <td className='specifications__spec-name'><strong>Power Consumption</strong></td>
                        <td className='specifications__spec-value'>{product.specifications.power_consumption}</td>
                    </tr>
                    <tr>
                        <td className='specifications__spec-name'><strong>Supported Formats</strong></td>
                        <td className='specifications__spec-value'>{product.specifications.supported_formats}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}
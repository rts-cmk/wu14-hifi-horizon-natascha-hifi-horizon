import { useLoaderData, useParams } from "react-router";

export default function Product() {

    const products = useLoaderData();
    const { id } = useParams();
    console.log(id);
    

    // find product that has the same id as the param id
    // and display its details

    // const product = products.find(p => p.id === id);
    // console.log(product);

    return (
        <div>
            <h1>Product Page</h1>
        </div>
    )
}
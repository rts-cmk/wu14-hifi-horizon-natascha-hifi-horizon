export default async function productDetailsLoader({ params }) {
    
    const id = params.id;

    const response = await fetch(`https://natascha-hifi-horizon.onrender.com/products/${id}`);
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const product = await response.json();
    return product;
}
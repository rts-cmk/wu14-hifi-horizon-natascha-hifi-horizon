export default async function productsLoader() {

    const response = await fetch('https://natascha-hifi-horizon.onrender.com/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    return products;
}
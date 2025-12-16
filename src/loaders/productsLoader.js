export default async function productsLoader() {

    const response = await fetch('http://localhost:3001/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const products = await response.json();
    return products;
}
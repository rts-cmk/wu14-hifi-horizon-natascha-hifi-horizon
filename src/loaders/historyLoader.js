export default async function historiesLoader() {

    const response = await fetch('https://natascha-hifi-horizon.onrender.com/histories');
    if (!response.ok) {
        throw new Error('Failed to fetch histories');
    }
    const histories = await response.json();
    return histories;
}
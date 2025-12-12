export default async function historiesLoader() {

    const response = await fetch('http://localhost:3001/histories');
    if (!response.ok) {
        throw new Error('Failed to fetch histories');
    }
    const histories = await response.json();
    return histories;
}
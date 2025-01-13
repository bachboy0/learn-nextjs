import { API_URL } from "../(home)/page";

async function getMovie(id) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`Fetching Movies: ${Date.now()}`);
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

export default async function MovieInfo({id}) {
    const movie = await getMovie(id);
    return <h6>{JSON.stringify(movie)}</h6>;
}
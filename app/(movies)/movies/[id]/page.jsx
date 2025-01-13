import { API_URL } from "../../../(home)/page";

async function getMovie(id) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`Fetching Movies: ${Date.now()}`);
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

async function getVideos(id) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log(`Fetching Videos: ${Date.now()}`);
    const response = await fetch(`${API_URL}/ ${id}/videos`);
    return response.json();
}


export default async function MovieDetail({ params: { id } }) {
    const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    return (
        <h1>{movie.title}</h1>
    );
}

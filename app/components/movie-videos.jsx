import { API_URL } from "../(home)/page";

async function getVideos(id) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(`Fetching Videos: ${Date.now()}`);
    const response = await fetch(`${API_URL}/ ${id}/videos`);
    return response.json();
}

export default async function MovieVideos({ id }) {
    const videos = await getVideos(id);
    return <h6>{JSON.stringify(videos)}</h6>;
}
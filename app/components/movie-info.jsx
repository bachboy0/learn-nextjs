import potato from "../../styles/movie-info.module.css";
import { API_URL } from "../(home)/page";

export async function getMovie(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch movie:", error);
        return null;
    }
}

export default async function MovieInfo({ id }) {
    const movie = await getMovie(id);
    if (!movie) {
        return <div>Error loading movie information.</div>;
    }
    return (
        <div className={potato.container}>
            <img
                className={potato.poster}
                src={movie.poster_path}
                alt={movie.title}
            />
            <h1 className={potato.title}>{movie.title}</h1>
            <p className={potato.info}>{movie.overview}</p>
        </div>
    );
}
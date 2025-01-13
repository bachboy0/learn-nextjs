import { API_URL } from "../(home)/page";
import styles from "../../styles/movie-videos.module.css";

async function getVideos(id) {
    try {
        const response = await fetch(`${API_URL}/${id}/videos`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    } catch (error) {
        console.error("Failed to fetch videos:", error);
        return [];
    }
}

export default async function MovieVideos({ id }) {
    const videos = await getVideos(id);
    if (videos.length === 0) {
        return <div>Error loading videos.</div>;
    }
    return (
        <div className={styles.container}>
            {videos.map((video) => (
                <iframe
                    key={video.id}
                    src={`https://youtube.com/embed/${video.key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                    gyroscope; picture-in-picture"
                    allowFullScreen
                    title={video.name}
                />
            ))}
        </div>
    );
}
import { Suspense } from "react";
import MovieInfo from "../../../components/movie-info";
import MovieVideos from "../../../components/movie-videos";
import { getMovie } from "../../../components/movie-info";

export async function generateMetadata({ params }) {
    const { id } = params;
    const movie = await getMovie(id);
    if (!movie) {
        return {
            title: "Movie not found",
        };
    }
    return {
        title: movie.title,
    };
}

export default async function MovieDetail({ params }) {
    const { id } = params;
    return (
        <div>
            <Suspense fallback={<h1>Loading movie info...</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos...</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}

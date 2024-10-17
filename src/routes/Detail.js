import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function Detail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        setMovie(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    },[id]);

    console.log(id);

    if (!movie) {
        return <h1>Loading...</h1>;
    }

    return (
    <div>
        <h1>{movie.title}</h1>
        <img src={movie.large_cover_image} alt="{movie.title}" />
        <p><strong>Genre:</strong> {movie.genres.join(", ")}</p>
            <p><strong>Rating:</strong> {movie.rating}</p>
            <p><strong>Summary:</strong> {movie.description_full}</p>
            <p><strong>URL:</strong> <a href={movie.url} target="_blank" rel="noopener noreferrer">Link</a></p>
        </div>

    )
}
export default Detail;
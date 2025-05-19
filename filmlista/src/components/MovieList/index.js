import { Ultra } from 'next/font/google';
import React, {useState, useRef} from 'react';

export default function MovieList() {
    const [movies, setMovies] = useState([{
        id: 1,
        title: 'Lol',
        rating: 2
    }]);

    <ul>
    </ul>

    return (
        <ul>
            {movies.map((movie) => (
                const stars = (for (let i = 0; i < movie.rating; i++) {
                    stars = stars + `<img src="./images/star.png" alt="star">`;
                })
                <li>{movie.title} {movie.stars}</li>
                ))}
        </ul>

    );
}

//<li>${movies.title} ${deleteBtn}${stars}</li>
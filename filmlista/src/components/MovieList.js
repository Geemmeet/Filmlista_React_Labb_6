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
                <li>{movie.title} {movie.stars}</li>
                ))}
        </ul>

    );
}

//<li>${movies.title} ${deleteBtn}${stars}</li>
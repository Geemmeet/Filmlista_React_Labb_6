import { Ultra } from 'next/font/google';
import React, {useState, useRef} from 'react';

export default function MovieList({movies}) {
    return (
        <ul>
            {movies.map((movie) => (
                <li key='movie.title'>{movie.title} {movie.stars}</li>
                ))}
        </ul>

    );
}

//<li>${movies.title} ${deleteBtn}${stars}</li>
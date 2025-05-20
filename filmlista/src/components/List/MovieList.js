import React, {useState, useRef} from 'react';
import Movie from '@/components/List/Movie'

export default function MovieList({movies}) {
    return (
        <>
            <ul className='list-group'>
                {movies.map((movie) => <Movie key={movie.id} item={movie}/>)}
            </ul>
        </>
    )

}
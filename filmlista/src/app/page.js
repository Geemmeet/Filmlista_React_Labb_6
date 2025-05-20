"use client";

import Button from '@/components/Button';
import MovieList from '@/components/List/MovieList';
import Form from '@/components/Form/Form'

import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';

//uuid används för att generera ett unikt id
import {v4 as uuidv4} from 'uuid';

export default function Home() {
  //actions before return
  const [movies, setMovies] = useState([]);

  function handleAdd(title, rating) {
    const id = uuidv4();
    const newMovie = {id, title, rating};
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  function handleDelete(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  //[...variable] Spread Operator in React to quickly copy all or part of an existing array or object into another array or object.
  function sort (type) {
    if (type === "rating") {
      const moviesSorted = [...movies].sort((a, b) => a.rating.localeCompare(b.rating));
      setMovies(moviesSorted)

    } else {
      const moviesSorted = [...movies].sort((a, b) => a.title.localeCompare(b.title));
      setMovies(moviesSorted)
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">Min filmlista</h1>
      <Form handleAdd={handleAdd} />
      <MovieList movies={movies} handleDelete={handleDelete}/>
      <Button 
        onClick={() => sort("alfa")} 
        styleClass={'btn btn-primary mt-5 me-2'} 
        text={'Alfabetisk ordning'}
      />
      <Button 
        onClick={() => sort("rating")} 
        styleClass={'btn btn-primary mt-5'} 
        text={'Betygsordning'}
      />
    </div>
  );
}

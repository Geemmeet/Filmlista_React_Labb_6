"use client";

import Button from '@/components/Button';
import MovieList from '@/components/List/MovieList';
import Form from '@/components/Form/Form'

import 'bootstrap/dist/css/bootstrap.css';

import { useState } from 'react';

import {v4 as uuidv4} from 'uuid';

export default function Home() {
  //actions before return
  const [movies, setMovies] = useState([]);

  function addMovie(title, rating) {
    const id = uuidv4();
    const newMovie = {id, title, rating};
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  function sortAlfa (movies) {
    movies.title.sort();


  };

  function sortRating (movies) {


  };
  

  return (
    <div className="container">
      <h1 className="text-center mt-5">Min filmlista</h1>
      <Form addMovie={addMovie} />
      <MovieList movies={movies}/>
      <Button 
        onClick={sortAlfa} 
        styleClass={'btn btn-primary mt-5 me-2'} 
        text={'Alfabetisk ordning'}
      />
      <Button 
        onClick={addMovie} 
        styleClass={'btn btn-primary mt-5'} 
        text={'Betygsordning'}
      />

    </div>
  );
}

"use client";

import { useState } from 'react';

import Select from '@/components/Select/index'
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import MovieList from '@/components/MovieList';

import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  //actions before return
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');

  function addMovie(event) {
    event.preventDefault;
    console.log(event.target);
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Min filmlista</h1>
      <form action={addMovie}>
        <fieldset>
          <legend>Lägg till en film</legend>
          <hr />
          <InputField 
            id = {'title-field'}
            labelText={'Titel: '}
            placeholderText={'Titel här...'}
          />
          <Select
            id={'rating'}
            listName={'rating-field'}
            options={[1, 2, 3, 4, 5]}
            labelText={'Betyg:'}
          />
        </fieldset>
        <button type="submit" className='btn btn-success mt-3'>Spara</button>
      </form>
      <MovieList />
      <Button 
        onClick={addMovie} 
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

"use client";

import { useState } from 'react';

import Select from '@/components/Select/index'
import InputField from '@/components/InputField';
import Button from '@/components/Button';

import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  //actions before return
  const [movies, setMovies] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container">
      <h1 className="text-center mt-5">Min filmlista</h1>
      <form>
        <fieldset>
          <legend>Lägg till en film</legend>
          <hr />
          <InputField 
            id = {'title-field'}
            labelText={'Titel: '}
            placeholderText={'Titel här...'}
            onChange ={''}
          />
          <Select
            id={'rating'}
            listName={'rating-field'}
            options={[1, 2, 3, 4, 5]}
            labelText={'Betyg:'}
          />
        </fieldset>
        <Button
          onClick={''} 
          styleClass={'btn btn-success mt-3'} 
          text={'Spara'}
        />
      </form>
      <Button 
        onClick={''} 
        styleClass={'btn btn-primary mt-5 me-2'} 
        text={'Alfabetisk ordning'}
      />
      <Button 
        onClick={''} 
        styleClass={'btn btn-primary mt-5'} 
        text={'Betygsordning'}
      />

    </div>
  );
}

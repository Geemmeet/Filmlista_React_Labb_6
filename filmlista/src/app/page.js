"use client";

import Button from '@/components/Button';
import MovieList from '@/components/MovieList';
import Form from '@/components/Form/Form'

import 'bootstrap/dist/css/bootstrap.css';




export default function Home() {
  //actions before return
  

  return (
    <div className="container">
      <h1 className="text-center mt-5">Min filmlista</h1>
      <Form />
      <MovieList />
      <Button 
        onClick={HandleSubmit} 
        styleClass={'btn btn-primary mt-5 me-2'} 
        text={'Alfabetisk ordning'}
      />
      <Button 
        onClick={HandleSubmit} 
        styleClass={'btn btn-primary mt-5'} 
        text={'Betygsordning'}
      />

    </div>
  );
}

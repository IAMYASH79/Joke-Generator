import React from 'react'
import Button from "./Button";
import './Joke.css';

const joke = () => {
  const [joke, setjoke] = React.useState ("");
  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
    .then((res) => res.json())
    .then((data) => setjoke(data.joke));
  };

  return(
    <div className='joke'>
        <button callApi = {fetchApi} />
        <p>{joke}</p>
    </div>
  );
    
  }


export default joke;
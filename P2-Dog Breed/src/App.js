import React from 'react'
import DogBreeds from './DogBreeds'
import DogImage from './DogImage'
import { useState } from 'react'
const App = props => {

    const [chosenBreed, setChosenBreed] = useState([]);


    const handleChooseBreed = (event,breed) =>{
        setChosenBreed(breed);
    }

  return (
    <>
        <h1>World of Dogs</h1>
        <DogImage chosenBreed={chosenBreed}/>
        <DogBreeds chosenBreed = {chosenBreed} handleChooseBreed={handleChooseBreed}/>
        
    </>
  )
}

export default App

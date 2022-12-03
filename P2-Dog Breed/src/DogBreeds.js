import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const DogBreeds = props => {

    const [ breeds, setBreeds ] = useState([]);

    useEffect(function loadAllBreeds(){
        axios.get('https://dog.ceo/api/breeds/list/all')
        .then(result =>{
            //console.log(result)
            setBreeds(Object.keys(result.data.message))
        })
        .catch(error=>console.log(error))
    },[])



    return (
        <div>
          <h2>List of dog breeds</h2>
          <div><b>Chosen Breed: {props.chosenBreed}</b></div>
          <ul>
            {breeds.map(breed=><li key={breed}><button onClick={event=>props.handleChooseBreed(event,breed)}>{breed}</button></li>)}
          </ul>
        </div>
      )
    }

export default DogBreeds

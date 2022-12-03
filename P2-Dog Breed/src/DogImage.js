import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DogImages = props => {

    const [image, setImage] = useState();
    useEffect(function loadImageByBreed(){

        if(props.chosenBreed !=undefined){
            axios.get(`https://dog.ceo/api/breed/${props.chosenBreed}/images`)
        .then(result=>{
            //console.log(result);
            setImage(result.data.message[0])
          })
          .catch(error=>console.log(error));
       
        }
        },[props.chosenBreed]);

        
        

  return (
    <div>
      <h2>Image</h2>
      <img src={image} alt={props.chosenBreed}/>
    </div>
  )
}

export default DogImages

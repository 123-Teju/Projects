import axios from 'axios'
import { format } from 'prettier'
import React from 'react'
import { useState, useEffect } from 'react'

const SevenDay = props => {

    const [ forecast , setForecast ] = useState()
    const [ days, setDays ] = useState(7)
    const [ chosenDays, setChosenDays ] = useState(7)

    useEffect(function loadSevenDayForecast(){
        axios.get('https://www.7timer.info/bin/civillight.php?lon=-123.1&lat=49.2827&unit=metric&output=json')
        .then(result =>{
            console.log(result)
            setForecast(result.data.dataseries) //code will change 
        })
        .catch(error => console.log(error))
    })
    const handleDaysChange = event =>{
        setDays(event.target.value)
    }
    const handleFormSubmit = event =>{
        event.preventDefault()
        setChosenDays(days)
    }

  return (
    <>
      <h2>Seven day weather</h2>
      <form onSubmit={event => handleFormSubmit(event)}>
          <label>
              Choose number of days to display:
              <input type='number' min='1' max='7' value={days} onChange={event => handleDaysChange(event)}/>
          </label>
          <button>Submit your choice</button>
      </form>
      {forecast ?
      <ul>
          {forecast.slice(0, chosenDays).map(day => <li key={day.date}>
              <h3>{day.date}</h3>
              <div>Temperature: high {day.temp2m.max}, low {day.temp2m.min}</div>
              <div>Conditions: {day.weather}</div>
          </li>)}
      </ul>
      : <div>Updating..</div>
      }
    </>
  )
}

export default SevenDay

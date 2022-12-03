import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Current = props => {

    const [ currentWeather, setCurrentWeather ] = useState();

    useEffect(function loadCurrentWeather (){
        const reload = () =>{
            //loads the most recent weather data
            axios.get('https://www.7timer.info/bin/civil.php?lon=-123.1&lat=49.2827&unit=metric&output=json')
            .then(result => {
                let time = new Date()

                console.log("reloading the data", time)

                setCurrentWeather({...result.data.dataseries[0],time: `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
            })
            })
            .catch(error => console.log(error))
        }
        let reloadTimer = setInterval(reload, 6000)
        reload()

        return function stopReloading(){
            clearInterval(reloadTimer)
        }
    },[])

  return (
    <>
      <h2>Current weather</h2>
        {currentWeather ? 
        <div>
            <div>Temperature: {currentWeather.temp2m}</div>
            <div>Time: {currentWeather.time}</div>
        </div>
      
        :
        <div>Updating...</div>
        }
    </>
  )
}

export default Current

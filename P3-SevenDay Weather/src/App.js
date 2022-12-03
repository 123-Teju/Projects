import React from 'react';
import { useState } from 'react';
import Current from './Current';
import SevenDay from './SevenDay';


const App = props => {

    const [type, setType] = useState()

    const handleChange = weatherType =>{ //weatherType = current
        setType(weatherType) //type = current 
    }
    let forecast 
    if (type == "current") {
        forecast = <Current />
    }
    else if ( type == "7-day"){
        forecast = <SevenDay />
    }

    return (
    <>
        <h1>Weather Forecast!</h1>
        <form>
            <fieldset>
                <legend>Choose weather Forecast type</legend>
                <label>
                    Current real-time weather
                    <input type="radio" name='type' onChange={()=>handleChange("current")}/>
                </label>
                <label>
                    7 day forecast
                    <input type="radio" name='type' onChange={()=>handleChange("7-day")}/>
                </label>
            </fieldset>
        </form>
        {forecast}
    </>);
}

export default App;
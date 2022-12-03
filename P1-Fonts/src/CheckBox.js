import React from 'react'
import { useState } from 'react'

const CheckBox = props => {

    const [ paragraph, setParagraph ] = useState("true")

    const handleToggle = () => {
        setParagraph(!paragraph);
    }

    // from line 6 to 10 and few parts in line 17 and 18 code was taken from https://reactgo.com/react-toggle-class/  "Reactgo"


     const Italic = {
        fontStyle:"italic"
     }

     const Styles = {
        backgroundColor: "white",
        padding: "30px",
        display: "block",
        marginBottom: "30px"
     }

  return (
      <div style={Styles}>
        <input type="checkbox" onClick={handleToggle} style={{textAlign:"start"}}/>
        <p style={paragraph ? null : Italic}>
            Check the box style the paragraph in italic
        </p>
        
    </div>
  )
}

export default CheckBox

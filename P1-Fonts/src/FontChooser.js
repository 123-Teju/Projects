import React from 'react'
import { useState } from 'react'

const FontChooser = props => {

    const [ textFont, setTextFont ] = useState('serif')

    const handleFontChooser = (event,font) =>{
        setTextFont(font)
    }

    const Styles1 = {
        listStyleType:"none",
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: "-30px"
    }

    const Styles2 = {
        backgroundColor: "white",
        padding: "30px",
        display: "block",
        marginTop: "20px"
     }
     
     

  return (
    <div style={Styles2}>
        <div style={{fontFamily:textFont}}>
            <h1 style={{textAlign:"center"}}>Font Chooser</h1>
            <p>Choose one of the following fonts:</p>
            <ul style={Styles1}>
                <li><button onClick={(event)=>handleFontChooser(event,"Arial")}>Arial</button></li>
                <li><button onClick={(event)=>handleFontChooser(event,"Geneva")}>Geneva</button></li>
                <li><button onClick={(event)=>handleFontChooser(event,"Georgia")}>Georgia</button></li>
            </ul>
        </div>
    </div>
  )
}

export default FontChooser

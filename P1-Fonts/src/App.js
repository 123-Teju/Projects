
import React from 'react'
import CheckBox from './CheckBox'
import FontChooser from './FontChooser'


const App = props => {

  const Styles = {
    backgroundColor: "lightblue",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "200px",
    marginBottom: "200px",
    width: "fit-content",
    padding: "30px",
    display: "block"
  }

  

  return (
    <div style={Styles}>
      <h1 style={{textAlign:"center"}}>Styles and Font</h1>
      <CheckBox />
      <FontChooser />
    </div>
  )
}

export default App


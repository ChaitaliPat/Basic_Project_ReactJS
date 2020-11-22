import React from "react";
import './App.css'
import Button from './Components/Button'

const App = () => {
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Hello World</h1>
            <Button title="Click Here!!"/>
            <Button title="Hello"/>
            <Button title="Hey"/>
        </div>
    )
}

export default App;
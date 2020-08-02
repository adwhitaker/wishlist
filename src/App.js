import React from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './Header'
import Navigator from './Navigator'

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Router>
                <Navigator/>
            </Router>
        </React.Fragment>
    )
}


export default App

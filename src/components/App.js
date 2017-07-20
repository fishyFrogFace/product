import React, { Component } from 'react'
import logo from '../images/milk.svg'
import './App.css'
import './Preview.css'
import Preview from './Preview'
import Text from './Text'


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Products</h2>
                </div>
                <div className="element-upload">
                    <Text />
                    <Preview />
                </div>
            </div>
        )
    }
}

export default App
import React, { Component } from 'react'
import './App.css'
import './Preview.css'
import Preview from './Preview'
import Text from './Text'
import Header from "./Header";


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header />
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
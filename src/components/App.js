import React, { Component } from 'react'
import './App.css'
import './Preview.css'
import Upload from './Upload'
import Header from "./Header";


class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <Header />
                    <h2 className="header-text">Products</h2>
                </div>
                <div className="App-body">
                    <Upload />
                </div>
            </div>
        )
    }
}

export default App
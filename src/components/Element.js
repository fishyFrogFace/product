import React, { Component } from 'react'
import logo from '../logo.svg'
import './App.css'
import Text from './Text'
import Picture from './Picture'

class Element extends Component {

    render() {
        return (
            <div>
                <Text />
                <Picture />
            </div>
        );
    }
}

export default Element
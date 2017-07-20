import React, { Component } from 'react'
import './App.css'

class Text extends Component {
    constructor(props) {
        super(props)
        this.state = {value: '', ready: false}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value, ready: false})
    }

    handleSubmit(event) {
        this.setState({ready: true})
        event.preventDefault() //needed to avoid "Press enter..." after string is displayed
    }

    output(ready) {
        switch (ready) {
            case true:
                return <p>{this.state.value}</p>
            default:
                return <p>Press enter when you are done typing</p>
        }
    }

    render() {
        return (
            <div className="product-name">
                {this.output(this.state.ready)}
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Calculate:
                        <input type="text" onChange={this.handleChange} />
                    </label>
                </form>
            </div>
        )
    }
}

export default Text
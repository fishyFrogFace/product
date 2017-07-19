import React, { Component } from 'react'
import './App.css'
import logo from '../logo.svg'

class Picture extends Component {

    constructor(props) {
        super(props)
        this.state = {img: logo}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    readImg(reader) {
        this.setState({img: reader.result})
    }

    handleChange(event) {
        //handle error
        let reader = new FileReader()
        reader.onloadend = () => {
            this.setState({img: reader.result})
        }
        reader.readAsDataURL(event.target.files[0])
    }

    handleSubmit(event) {
        //handle upload
        this.setState({img: logo})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" name="pic" accept="image/*" onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleSubmit}/>
                </form>
                <img src={this.state.img} alt="Product image" />
            </div>
        )
    }
}

export default Picture
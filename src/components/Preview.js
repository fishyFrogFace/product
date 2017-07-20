import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import example from '../images/cheese-25234.svg'

class Preview extends Component {

    constructor(props) {
        super(props)
        this.state = {img: example}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(files) {
        //handle error
        let reader = new FileReader()
        reader.onloadend = () => {
            this.setState({img: reader.result})
        }
        reader.readAsDataURL(files[0])
    }

    handleSubmit(event) {
        //handle upload
        this.setState({img: example})
    }

    render() {
        return (
            <div className="image-upload">
                <img
                    src={this.state.img}
                    alt="New product"
                    className="image-preview" />
                <Dropzone
                    multiple={false}
                    accept="image/*"
                    onDrop={this.handleChange} />
            </div>
        )
    }
}

export default Preview
import React, { Component } from 'react'
import Dropzone from '../react-dropzone/dropzone'
import example from '../images/cheese-25234.svg'
import Preview from "./Preview";

class Upload extends Component {
    constructor(props) {
        super(props)
        this.state = {value: '', img: example}
        this.handleImgChange = this.handleImgChange.bind(this)
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleTextChange(event) {
        this.setState({value: event.target.value})
    }

    handleImgChange(files) {
        //handle error
        let reader = new FileReader()
        reader.onloadend = () => {
            this.setState({img: reader.result})
        }
        reader.readAsDataURL(files[0])
    }

    handleSubmit(event) {
        //pass to class that saves to db
    }

    render() {
        return (
            <div className="upload-preview">
                <div className="upload">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Product name:
                            <input type="text" onChange={this.handleTextChange} />
                            <input type="submit" onSubmit={this.handleSubmit} />
                        </label>
                    </form>
                    <Dropzone
                        multiple={false}
                        accept="image/*"
                        onDrop={this.handleImgChange}>
                        <p>Drag image here to upload</p>
                    </Dropzone>
                </div>
                <Preview text={this.state.value} img={this.state.img} />
            </div>
        )
    }
}

export default Upload
import React, { Component } from 'react'

class Preview extends Component {

    static previewText(string) {
        console.log(string)
        switch (string) {
            case '':
                return <h2>Enter a product name</h2>
            default:
                return <h2>{string}</h2>
        }
    }

    render() {
        return (
            <div className="preview">
                <img
                    src={this.props.img}
                    alt="New product"
                    className="image-preview" />
                {Preview.previewText(this.props.text)}
            </div>
        )
    }
}

export default Preview
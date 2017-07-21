import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

class Dropzone extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDragActive: false,
            supportClick: props.supportClick,
            multiple: props.multiple
        }
        this.onDragOver = this.onDragOver.bind(this)
        this.onDragLeave = this.onDragLeave.bind(this)
        this.onDrop = this.onDrop.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    propTypes: {
        onDrop: PropTypes.func.isRequired,
        onDragOver: PropTypes.func,
        onDragLeave: PropTypes.func,

        style: PropTypes.object,
        className: PropTypes.string,
        activeClassName: PropTypes.string,

        supportClick: PropTypes.bool,
        accept: PropTypes.string,
        multiple: PropTypes.bool,
    }

    onDragLeave(event) {
        this.setState({
            isDragActive: false
        })

        if (this.props.onDragLeave) {
            this.props.onDragLeave(event)
        }
    }

    onDragOver(event) {
        event.preventDefault()
        event.stopPropagation()
        event.dataTransfer.dropEffect = 'copy'

        if (this.props.onDragOver) {
            this.props.onDragOver(event)
        }
    }

    onDrop(event) {
        event.preventDefault()

        this.setState({
            isDragActive: false
        })

        const getFiles = () => {
            if (event.dataTransfer) {
                return event.dataTransfer.files
            } else if (event.target) {
                return event.target.files
            }
        }

        let files = getFiles()
        const maxFiles = (this.props.multiple) ? files.length : 1

        for (var i = 0; i < maxFiles; i++) {
            files[i].preview = URL.createObjectURL(files[i])
        }

        if (this.props.onDrop) {
            files = Array.prototype.slice.call(files, 0, maxFiles)
            this.props.onDrop(files, event)
        }
    }

    onClick() {
        if (this.props.supportClick === true) {
            this.open()
        }
    }

    open() {
        var fileInput = ReactDOM.findDOMNode(this.refs.fileInput)
        fileInput.value = null
        fileInput.click()
    }

    render() {
        var className = this.props.className || 'dropzone'
        if (this.state.isDragActive) {
            className += (' ' + this.props.activeClassName) || ' active'
        }

        var style = {}
        if (this.props.style) { // user-defined inline styles take priority
            style = this.props.style
        } else if (!this.props.className) { // if no class or inline styles defined, use defaults
            style = {
                borderStyle: this.state.isDragActive ? 'solid' : 'dashed'
            }
        }

        return (
            React.createElement('div',
                {
                    className: className,
                    style: style,
                    onClick: this.onClick,
                    onDragLeave: this.onDragLeave,
                    onDragOver: this.onDragOver,
                    onDrop: this.onDrop
                },
                React.createElement('input',
                    {
                        style: { display: 'none' },
                        type: 'file',
                        multiple: this.props.multiple,
                        ref: 'fileInput',
                        onChange: this.onDrop,
                        accept: this.props.accept
                    }
                ),
                this.props.children
            )
        )
    }

}

Dropzone.defaultProps = {
    supportClick: true,
    multiple: false
}

export default Dropzone

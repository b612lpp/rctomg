import React, { Component } from 'react'

export class Message extends Component {
    render() {
        return (
            <div style={{ backgroundColor: this.props.author === "bot" ? 'red' : 'green' }}>
                {this.props.author} says {this.props.text}
            </div>
        )
    }
}

export default Message

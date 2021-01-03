import React, { Component } from 'react'

export class Message extends Component {

    render() {
        return (
            <div>
                {this.props.author} says {this.props.text} at {this.props.time}
            </div>
        )
    }
}

export default Message

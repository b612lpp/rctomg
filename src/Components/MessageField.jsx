import React, { Component } from 'react';
import Message from './Message';
import { Button, TextField } from '@material-ui/core';

export class MessageField extends Component {
    state = {
        dialogs: [{
            id: 0,
            messages: [{ author: "human", text: "hello 0" }, { author: "bot", text: "i'm bot 0" }]
        }, {
            id: 1,
            messages: [{ author: "human", text: "hello 1" }, { author: "bot", text: "i'm bot 1" }]
        }]
    }
    pokeRobot = () => {

        const tmp = this.state.dialogs[this.props.diagID].messages.concat({ author: "human", text: document.getElementById("qq").value });


        this.setState(prevState => {
            const diag = [...prevState.dialogs]
            diag[this.props.diagID].messages = tmp
            return { diag }
        })
        document.getElementById("qq").value = "";
    }
    componentDidUpdate() {


        let tmp = this.state.dialogs[this.props.diagID].messages.slice(-1)[0];
        if (tmp.author === "human") {
            setTimeout(() => {
                let tmpMsg = this.state.dialogs[this.props.diagID].messages.concat({ author: "bot", text: "i'm dead inside" });
                this.setState(prevState => {
                    const diag = [...prevState.dialogs]
                    diag[this.props.diagID].messages = tmpMsg
                    return { diag }
                })
            }, 1500);

        }

    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) {
            const tmp = this.state.dialogs[this.props.diagID].messages.concat({ author: "human", text: document.getElementById("qq").value });


            this.setState(prevState => {
                const diag = [...prevState.dialogs]
                diag[this.props.diagID].messages = tmp
                return { diag }
            })
            document.getElementById("qq").value = "";
        }

    };
    render() {
        const diags = this.state.dialogs
        const msgs = diags.map((el) => {
            return el.messages.map((el2, index) => {
                if (this.props.diagID == el.id) { return <Message key={index} text={el2.text} author={el2.author} /> }

            })
        })


        return (
            <div>
                <div>
                    {msgs}
                </div>



                <TextField id="qq" label="" onKeyUp={(event) => this.handleKeyUp(event)} />
                <Button id="qq" color="primary" onClick={this.pokeRobot}>Жмяк</Button>
            </div>
        )
    }
}

export default MessageField

import React from 'react';
import Nmsg from "./Message";

export default class MessageField extends React.Component {
    state = {
        messages: [{
            time: Date,
            author: "human",
            text: "privet"
        }, {
            time: Date(),
            author: "human",
            text: "kak dela?"
        }]
    }

    pokeRobot = () => {
        let tmp = this.state.messages.concat({ time: Date(), author: "human", text: document.getElementById("qq").value })
        this.setState({ messages: tmp });

    }

    componentDidUpdate() {


        let tmp = this.state.messages.slice(-1)[0];
        if (tmp.author === "human") {
            setTimeout(() => {
                let tmpMsg = this.state.messages.concat({ time: Date(), author: "bot", text: "i'm dead inside" });
                this.setState({ messages: tmpMsg });
            }, 1500);

        }

    }
    render() {
        const allMessages = this.state.messages;
        const listItems = allMessages.map((m, index) => <Nmsg key={index} author={m.author} text={m.text} time={m.time} />)



        return <div>

            {listItems}
            <button onClick={this.pokeRobot}>Жмяк.</button>
            <input type="text" name="" id="qq" />
        </div>
    }
}

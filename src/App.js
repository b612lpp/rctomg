import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props)


    this.state = { msg: 'Хорошо?' }


    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

    // Бесконечное "Нормально" по клику. 
    this.setState({ msg: this.state.msg + " Нормально." })
  }

  render() {
    return (
      <div>
        <h2>-------</h2>

        <p>{this.state.msg}</p>


        {/* Set click handler */}
        <button onClick={this.handleClick}>
          Жмяк!
        </button>
      </div>
    )
  }
}

export default App

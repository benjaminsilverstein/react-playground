import React from 'react'

export class HelloWorld extends React.Component { 
    constructor(props) {
    super(props)
    this.state = {who: 'world'}
}
handleButtonClickFriend = () => {
    this.setState({ who: 'Friend' })
}
handleButtonClickWorld = () => {
    this.setState({ who: 'World' })
}
handleButtonClickReact = () => {
    this.setState({ who: 'React' })
}

  render() {
    return (
      <div>
        <p>Hello, {this.state.who}.</p>
        <button onClick={this.handleButtonClickFriend}>
              Friend
            </button>
            <button onClick={this.handleButtonClickWorld}>
              World
            </button>
            <button onClick={this.handleButtonClickReact}>
              React
            </button>
      </div>
    )
  }
}


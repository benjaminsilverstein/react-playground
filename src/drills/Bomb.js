import React from 'react'

export class Bomb extends React.Component { 
    constructor(props) {
    super(props)
    this.state = {count: '0'}
}
componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  timeclock() {
      
      if (this.state.count >= 8) {
        clearInterval(this.interval)
          return 'boom'
      } else if (this.state.count % 2 === 0) {
        return 'tick'
      } else {
          return 'tock'
      }
  }
render() {
    return (
        <div >
            <p>{this.timeclock()}</p>
         </div>   
    )
}
}
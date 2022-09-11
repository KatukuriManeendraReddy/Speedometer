import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state

    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onBrake = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Speedometer</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            className="image"
            alt="speedometer"
          />
        </div>
        <h3 className="heading">Speed is {count}mph</h3>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" onClick={this.onAccelerate}>
            Accelerate
          </button>
          <button className="button2" onClick={this.onBrake}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

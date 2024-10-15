import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAcceleration = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onBreak = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    let {count} = this.state
    if (count >= 200) {
      count = 200
    } else if (count <= 0) {
      count = 0
    }

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="paragraph">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-container">
          <button
            className="btn acc-button"
            type="button"
            onClick={this.onAcceleration}
          >
            {' '}
            Accelerate{' '}
          </button>
          <button
            className="btn br-button"
            type="button"
            onClick={this.onBreak}
          >
            {' '}
            Apply Brake{' '}
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer

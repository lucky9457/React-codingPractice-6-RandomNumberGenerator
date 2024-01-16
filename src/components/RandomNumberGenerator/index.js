// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.floor(Math.random() * 100)

  updates = () => {
    const getnumber = this.getRandomNumber()
    console.log(getnumber)
    this.setState({
      count: getnumber,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="main">
        <div className="Sec_main">
          <h1 className="hh">Random Number</h1>
          <p className="pp">
            Generate a random number in the range of 0 to 100
          </p>
          <button onClick={this.updates} className="btn">
            Generate
          </button>
          <p className="coun">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator

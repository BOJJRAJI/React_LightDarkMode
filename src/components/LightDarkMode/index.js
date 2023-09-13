import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onChangeColor = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  render() {
    const {isDark} = this.state
    console.log(isDark)
    return (
      <div className="bg-container">
        {isDark ? (
          <div className="dark-card">
            <p className="dark-para">Click To Change Mode</p>
            <button
              className="button"
              type="button"
              onClick={this.onChangeColor}
            >
              Light Mode
            </button>
          </div>
        ) : (
          <div className="light-card">
            <p className="light-para">Click To Change Mode</p>
            <button
              className="button"
              type="button"
              onClick={this.onChangeColor}
            >
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode

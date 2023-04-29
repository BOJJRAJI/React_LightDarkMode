import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  changeMode = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const card = isDarkMode ? 'dark-card' : 'white-card'
    const heading = isDarkMode ? 'white-heading' : 'dark-heading'
    const text = isDarkMode ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={card}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.changeMode}>
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

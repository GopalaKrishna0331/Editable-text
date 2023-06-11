import {Component} from 'react'

import './App.css'

class App extends Component {
  state = {edit: false, textValue: ''}

  onChangeInput = event => {
    this.setState({textValue: event.target.value})
  }

  onClickEdit = () => {
    this.setState(prevState => ({edit: !prevState.edit}))
  }

  render() {
    const {edit, textValue} = this.state
    console.log(textValue)
    return (
      <div className="container">
        <div className="main-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="tab">
            {edit ? (
              <p className="para">{textValue}</p>
            ) : (
              <input
                type="text"
                className="input"
                value={textValue}
                onChange={this.onChangeInput}
              />
            )}
            <button className="button" type="button" onClick={this.onClickEdit}>
              {edit ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App

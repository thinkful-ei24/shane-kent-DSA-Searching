import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: [89, 30, 25, 32, 72, 70],
      message: '',
      inputValue: ''
    }
  }

  linearSearch = (e, searchVal) => {
    e.preventDefault();
    console.log(searchVal);
    for (let i = 0; i < this.state.data.length; i++) {
      console.log(i);
      if (searchVal == this.state.data[i]) {
        return this.setState((state) => {
        return {
          message: `Took ${(i + 1)} iterations to find value`
        }})
      }
    }
  }

  updateInputValue= (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form>
          <input type="text" name="inputText" onChange={this.updateInputValue}></input>

          <button type="submit" onClick={(e) => this.linearSearch(e, this.state.inputValue)}>Search</button>
          <p className="output-field">{this.state.message}</p>
        </form>
        </header>
      </div>
    );
  }
}

export default App;

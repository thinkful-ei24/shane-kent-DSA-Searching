import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
      message: '',
      binaryMessage: '',
      inputValue: '',
      binaryValue: '',

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

  binarySearch = (e, searchVal) => {
    e.preventDefault();
    const sortedData = this.state.data.sort((a, b) => a - b);
    console.log(sortedData)
    let counter = 0;
    let start = 0;
    let end = sortedData.length - 1;
    let middle = Math.floor((start + end)/2);

    while(end >= start) {
      counter++
      if (Number(searchVal) === sortedData[middle]) {
        return this.setState({
          binaryMessage: `Took ${counter} iterations to find value`
        });
      } else if (Number(searchVal) > sortedData[middle]) {
        start = middle + 1;
        middle = Math.floor((start + end)/2);
      } else {
        end = middle -1;
        middle = Math.floor((start + end)/2);
      }
    }
    return this.setState({
      binaryMessage: `Took ${counter} iterations. Could not find value`
    });
  }

  updateInputValue= (evt) => {
    this.setState({
      inputValue: evt.target.value
    });
  }

  updateBinaryValue= (evt) => {
    this.setState({
      binaryValue: evt.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <form>
          <label>linear search</label>
          <br></br>
          <input type="text" name="inputText" onChange={this.updateInputValue}></input>

          <button type="submit" onClick={(e) => this.linearSearch(e, this.state.inputValue)}>Search</button>
          <p className="output-field">{this.state.message}</p>
        </form>

        <form>
        <label>binary search</label>
        <br></br>
        <input type="text" name="inputText" onChange={this.updateBinaryValue}></input>

        <button type="submit" onClick={(e) => this.binarySearch(e, this.state.binaryValue)}>Search</button>
        <p className="output-field">{this.state.binaryMessage}</p>
      </form>
        </header>
      </div>
    );
  }
}

export default App;




// look for the main catagory 330 -economics

// add/search for + .90 geo
  // add/search for + .04 Europe

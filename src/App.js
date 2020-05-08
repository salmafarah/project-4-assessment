import React, { Component } from 'react';
import './App.css';
import CircleSelector from './components/CircleSelector/CircleSelector';
import Circle from './components/Circles/Circle'

class App extends Component {
  constructor() {
    super()
    this.state = {
      selectedCircle: 'firstCircle'
    }
  }


  handleSelectedCircle = (circle) => {
    this.setState({selectedCircle: circle})
  }


    render() {
      return (
        <div className="App">
          <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
          <main>
          <CircleSelector
            selectedCircle={this.state.selectedCircle}
            handleSelectedCircle={this.handleSelectedCircle}
          />
          <Circle
            selectedCircle={this.state.selectedCircle}
          />
          </main>
        </div>
      );
    }
  }

export default App;


import React, { Component } from 'react';
import './App.css';
import NavBar from './Components/NavBar.js';
//import axios from 'axios'

class App extends Component {
  //CODE FOR CALLING LAMBDA; DON'T DELETE
  //constructor() {
  //   super()
  //
  //   this.state = {lambdaResponse: ''}
  //
  //   this.invokeLambda = this.invokeLambda.bind(this);
  //}

  // invokeLambda() {
  //   axios.get("https://83679zfrwf.execute-api.us-west-2.amazonaws.com/Prod")
  //   .then(response => this.setState({lambdaResponse: response.data}))
  // }

  // componentDidMount() {
  //   this.invokeLambda();
  // }
  // {this.state.lambdaResponse}

  render() {
    return (
      <NavBar />
    )
  }
}

export default App;

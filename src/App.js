import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {lambdaResponse: ''}

    this.invokeLambda = this.invokeLambda.bind(this);
  }

  invokeLambda() {
    axios.get("https://83679zfrwf.execute-api.us-west-2.amazonaws.com/Prod")
    .then(response => this.setState({lambdaResponse: response.data}))
  }

  componentDidMount() {
    this.invokeLambda();
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.lambdaResponse}</p>
      </div>
    );
  }
}

export default App;


// export default class UserList extends React.Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {person: []};
//   }
//
//   componentDidMount() {
//     this.UserList();
//   }
//
//   UserList() {
//     $.getJSON('https://randomuser.me/api/')
//       .then(({ results }) => this.setState({ person: results }));
//   }
//
//   render() {
//     const persons = this.state.person.map((item, i) => (
//       <div>
//         <h1>{ item.name.first }</h1>
//         <span>{ item.cell }, { item.email }</span>
//       </div>
//     ));
//
//     return (
//       <div id="layout-content" className="layout-content-wrapper">
//         <div className="panel-list">{ persons }</div>
//       </div>
//     );
//   }
// }

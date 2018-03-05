import React, { Component } from 'react';
import { Router, IndexRoute, Route, IndexLink } from 'react-router';

class Contact extends Component {
  render() {
    return(<h1>Super broken</ h1>)
  }
}

const Instagram = () => <h3>Instagram</h3>
const Twitter = () => <h3>Twitter</h3>


export default Contact;

// <div>
//   <Router>
//     <IndexRoute path= "instagram" component={Twitter} />
//     <Route path='instagram' component={Instagram} />
//   </ Router>
//
//   <br />
//   <IndexLink activeClassName='active' to='/address'>Twitter</IndexLink>&nbsp;
//   <IndexLink activeClassName='active' to='/address/instagram'>Instagram</IndexLink>
//   <h1>We are located at 555 Jackson St.</h1>
// </div>

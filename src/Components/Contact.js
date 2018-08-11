import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, IndexLink } from 'react-router';

class Contact extends Component {
  render() {
    return(
      <div>
        <br />
        <IndexLink activeClassName='active' to='/address/twitter'>Fix</IndexLink>&nbsp;
        <IndexLink activeClassName='active' to='/address/instagram'>It</IndexLink>
        <h1>We are located at 555 Jackson St.</h1>
      </div>
    )
  }
}

const Instagram = () => <h3>Instagram</h3>
const Twitter = () => <h3>Twitter</h3>


export default Contact;

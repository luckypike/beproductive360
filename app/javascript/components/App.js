import React from 'react';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route,
  Link, NavLink
} from 'react-router-dom';

import Index from './Index';
import Join from './Join';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth: this.props.auth
    }
  }

  render () {
    return (
      <Router>
        <React.Fragment>
          <Route exact strict path={this.props.root_path} render={props => (
            <Index {...props} {...this.props} />
          )}/>

          <Route exact strict path={this.props.join_path} render={props => (
            <Join {...props} {...this.props} />
          )}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

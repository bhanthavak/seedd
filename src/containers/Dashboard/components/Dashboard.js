import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Dashboard extends PureComponent {
  constructor() {
    super();    
  }
  
  render() {
    return (
        <div>This is my Dashboard</div>
      )
  }
}

export default Dashboard;
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Configuration extends PureComponent {
  constructor() {
    super();    
  }
  
  render() {
    return (
        <div>This is my Configuration</div>
      )
  }
}

export default Configuration;
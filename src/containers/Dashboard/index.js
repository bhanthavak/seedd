import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Dashboard from './components/Dashboard';

export default class DashboardWrapper extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Dashboard/>
        </Row>
      </Container>
    )
  }
}


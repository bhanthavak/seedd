import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import PlanManagement from './components/PlanManagement';

export default class PlanManagementWrapper extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Plan Management</h3>
          </Col>
        </Row>
        <Row>
          <PlanManagement/>
        </Row>
      </Container>
    )
  }
}


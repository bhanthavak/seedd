import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import ReportsComponent from './components/ReportsComponent';

export default class ReportsWrapper extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Example Page Two</h3>
          </Col>
        </Row>
        <Row>
          <ReportsComponent/>
        </Row>
      </Container>
    )
  }
}


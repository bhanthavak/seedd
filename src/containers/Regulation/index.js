import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import RegulationComponent from './components/RegulationComponent';

export default class ControlWrapper extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Example Page Two</h3>
          </Col>
        </Row>
        <Row>
          <RegulationComponent/>
        </Row>
      </Container>
    )
  }
}


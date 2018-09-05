import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Configuration from './components/Configuration';

export default class ConfigurationWrapper extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Example Page Two</h3>
          </Col>
        </Row>
        <Row>
          <Configuration/>
        </Row>
      </Container>
    )
  }
}


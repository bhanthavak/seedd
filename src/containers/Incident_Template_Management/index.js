import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import IncidentTemplateComponent from './components/IncidentTemplateComponent';

export default class IncidentTemplateWrapper extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Example Page Two</h3>
          </Col>
        </Row>
        <Row>
          <IncidentTemplateComponent/>
        </Row>
      </Container>
    )
  }
}


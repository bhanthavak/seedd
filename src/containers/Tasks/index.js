import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import TasksComponent from './components/TasksComponent';

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
          <TasksComponent/>
        </Row>
      </Container>
    )
  }
}


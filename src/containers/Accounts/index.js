import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import Accounts from './components/Accounts';

export default class AccountsWrapper extends PureComponent {
  render() {
    return (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>Accounts</h3>
          </Col>
        </Row>
        <Row>
          <Accounts/>
        </Row>
      </Container>
    )
  }
}


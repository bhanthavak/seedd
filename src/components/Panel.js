import React, {PureComponent} from 'react';
import {Badge, Card, CardBody, Col} from 'reactstrap';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from 'reactstrap';
import Table from '../containers/example/Table';
import {Collapse} from 'reactstrap';
import CloseIcon from 'mdi-react/CloseIcon';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import MinusIcon from 'mdi-react/MinusIcon';
import AutorenewIcon from 'mdi-react/AutorenewIcon';
import LoadingIcon from 'mdi-react/LoadingIcon';
var items= [
  {
    name: 'Bitcoin',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'btc'
  },
  {
    name: 'Ethereum',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'eth'
  },
  {
    name: 'Ripple',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'xrp'
  },
  {
    name: 'Bitcoin Cash',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'bch'
  },
  {
    name: 'Eos',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'eos'
  },
  {
    name: 'Litecoin',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'ltc'
  },
  {
    name: 'Cardano',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'ada'
  },
  {
    name: 'Stellar',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'xlm'
  },
  {
    name: 'IOTA',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'iota'
  },
  {
    name: 'NEO',
    market_cap: '$ 131 131 454 444',
    price: '$ 6 432,23',
    volume: '$ 6 432 323 455',
    supply: '$ 6 432 323',
    change: '0,59%',
    chart: 'neo'
  }
]
class DropDownMore extends PureComponent {
  static propTypes = {
    index: PropTypes.number,
    handleDeleteRow: PropTypes.func
  };

  render() {
    return (
      <UncontrolledDropdown className='dashboard__table-more'>
        <DropdownToggle>
          <p><DotsHorizontalIcon/></p>
        </DropdownToggle>
        <DropdownMenu className='dropdown__menu'>
          <Link to={`/dashboard_crypto/edit/${this.props.index}`}>
          <DropdownItem>Edit</DropdownItem></Link>
          <DropdownItem onClick={this.props.handleDeleteRow}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

export default class AlertComponent extends PureComponent {
  static propTypes = {
    divider: PropTypes.bool,
    color: PropTypes.string,
    title: PropTypes.string,
    subhead: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
  };
  
  constructor(props) {
    super(props);
    
    this.state = {
      visible: true,
      // collapse: true,
      refresh: false
    };
    
    this.onShow = this.onShow.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    // this.onCollapse = this.onCollapse.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
  }
  
  onShow() {
    this.setState({visible: true});
  }
  
  onDismiss() {
    this.setState({visible: false});
  }
  
  // onCollapse() {
  //   this.setState({collapse: !this.state.collapse});
  // }
  
  onRefresh() {
    // your async logic here
    this.setState({refresh: !this.state.refresh});
    setTimeout(() => this.setState({refresh: false}), 5000);
  }
  
  render() {
    
    if (this.state.visible) {
      return (
        <Col md={this.props.md} lg={this.props.lg} xl={this.props.xl} sm={this.props.sm} xs={this.props.xs}>
          <Card
            className={`panel${this.props.color ? ` panel--${this.props.color}` : ''}
            ${this.props.divider ? ' panel--divider' : ''}${this.state.collapse ? '' : ' panel--collapse'}`}>
            {/* <div className='panel__body'> */}
              {this.state.refresh ? <div className='panel__refresh'><LoadingIcon/></div> : ''}
              <div className='panel__btns'>
              {/* <button className='panel__btn' onClick={this.onCollapse}><MinusIcon/></button> 
                <button className='panel__btn' onClick={this.onRefresh}><AutorenewIcon/></button>
                <button className='panel__btn' onClick={this.onDismiss}><CloseIcon/></button> */}
              </div>
              <div className='panel__title'>
                <h5 className='bold-text'>
                  {this.props.icon ? <span className={`panel__icon lnr lnr-${this.props.icon}`}/> : ''}
                  {this.props.title}
                  <Badge className='panel__label'>{this.props.label}</Badge>
                </h5>
                <h5 className='subhead'>{this.props.subhead}</h5>
              </div>
                <div className='panel__content'>
                {this.props.children}
                {/* </div> */}
            </div>
          </Card>
        </Col>
      );
    }
    
    return '';
  }
}
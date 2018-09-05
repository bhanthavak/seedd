import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import {Area, AreaChart, ResponsiveContainer, Tooltip} from 'recharts';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { deleteCryptoTableData } from '../../../redux/actions/cryptoTableActions';

import Pagination from '../../example/components/Pagination';
import Table from '../../example/Table';
import DotsHorizontalIcon from 'mdi-react/DotsHorizontalIcon';
import Panel from '../../../components/Panel';
let rowsPerPage = 8;
var heads = [
  {
    key: 'id',
    name: '#',
    width: 80
  },
  {
    key: 'name',
    name: 'Name',
    sortable: true
  },
  {
    key: 'market_cap',
    name: 'Market Cap',
    sortable: true
  },
  {
    key: 'price',
    name: 'Price',
    sortable: true
  },
  {
    key: 'volume',
    name: 'Volume',
    sortable: true
  },
  {
    key: 'supply',
    name: 'Circulating Supply',
    sortable: true
  },
  {
    key: 'change',
    name: 'Change',
    sortable: true
  }]

var items = [
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
          <p><DotsHorizontalIcon /></p>
        </DropdownToggle>
        <DropdownMenu className='dropdown__menu'>
          <Link to={`/pages/two1/edit`}>
            <DropdownItem>Edit</DropdownItem></Link>
          <DropdownItem onClick={this.props.handleDeleteRow}>Delete</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }
}

class TopTen extends PureComponent {
  constructor() {
    super();
    this.state = {
      pageOfItems: [],
      count: 0
    }
    this.onChangePage = this.onChangePage.bind(this)
  }
  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
    console.log(items.length);
    this.state.count = items.length;
    console.log(this.state.count);
  }
  handleDeleteRow = (index, e) => {
    e.preventDefault();
    let arrayCopy = [...this.props.cryptoTable.items];
    arrayCopy.splice(index, 1);
    this.props.dispatch(deleteCryptoTableData(arrayCopy));
  };

  render() {
    return (
      <Panel lg={12} title="this is Table title">
        <Table responsive className='table'>
          <thead>
            {heads.map((crypto, index) =>
              // <tr>
              <th>{crypto.name}</th>

              // </tr>
            )}
            <th></th>

          </thead>
          <tbody>
            {items.map((crypto, index) =>
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{crypto.name}</td>
                <td>{crypto.market_cap}</td>
                <td>{crypto.price}</td>
                <td>{crypto.volume}</td>
                <td>{crypto.supply} {crypto.chart}</td>
                <td>{crypto.change}</td>
                <td>
                  <DropDownMore index={index} handleDeleteRow={(e) => this.handleDeleteRow(index, e)} />
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Pagination items={items}  count={Math.ceil(this.state.count / rowsPerPage)} onChangePage={this.onChangePage} />

      </Panel>
    )
  }
}

export default connect(state => {
  return { cryptoTable: state.cryptoTable };
})(TopTen);

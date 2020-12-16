import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStockCards = () => {
    return this.props.stocks.map(stock => <Stock key={stock.id} stockObj={stock}/>)
  }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStockCards()}
      </div>
    );
  }

}

export default StockContainer;

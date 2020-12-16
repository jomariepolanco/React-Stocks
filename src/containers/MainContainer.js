import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(stocksArr => this.setState({stocks: stocksArr}))
  }

  boughtStock = (stockObj) => {
    this.setState({portfolio: [...this.state.portfolio, stockObj]})
  }

  sellStock = (stockObj) => {
    let newArray = [...this.state.portfolio].filter(stock => stock.id !== stockObj.id)
    this.setState({portfolio: newArray})
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickedStock={this.boughtStock} stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer clickedStock={this.sellStock} stocks={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

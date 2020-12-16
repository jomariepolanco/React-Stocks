import React, { Component, StrictMode } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    filter: "All",
    alphaCheck: false,
    priceCheck: false
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(stocksArr => this.setState({stocks: stocksArr}))
  }

  boughtStock = (id) => {
    const found = this.state.stocks.find(stock => stock.id === id)
    if (!this.state.portfolio.find(stock => stock === found)){
      this.setState({portfolio: [...this.state.portfolio, found]})
    }
  }

  sellStock = (id) => {
    let newArray = [...this.state.portfolio].filter(stock => stock.id !== id)
    this.setState({portfolio: newArray})
  }

  sortStocks = (value) => {
    if (value === "Alphabetically"){
      this.setState({alphaCheck: true, priceCheck: false})
      this.alphabeticalSort()
    } else if (value === "Price"){
      this.setState({priceCheck: true, alphaCheck: false})
      this.priceSort()
    }
  }
  
  alphabeticalSort = () => {
    const newArray = [...this.state.stocks].sort((a, b) => {
      if (a.ticker < b.ticker){
        return -1
      }
      if (a.ticker > b.ticker){
        return 1
      }
      return 0
    })
    this.setState({stocks: newArray})
  }

  priceSort = () => {
    const newArray = [...this.state.stocks].sort((a, b) => a.price - b.price)
    this.setState({stocks: newArray})
  }

  updateFilter = (value) => {
    this.setState({filter: value})
  }

  filterSort = () => {
    let filteredStocks = [...this.state.stocks]
    if (this.state.filter !== "All"){
      filteredStocks = filteredStocks.filter(stock => stock.type == this.state.filter)
    } 
    return filteredStocks
  }

  render() {
    return (
      <div>
        <SearchBar updateFilter={this.updateFilter} sortStocks={this.sortStocks} alphaCheck={this.state.alphaCheck} priceCheck={this.state.priceCheck}/>

          <div className="row">
            <div className="col-8">

              <StockContainer clickedStock={this.boughtStock} stocks={this.filterSort()}/>

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

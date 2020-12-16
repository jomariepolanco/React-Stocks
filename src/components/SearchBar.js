import React from 'react';

class SearchBar extends React.Component {


  handleCheck = (e) => {
    this.props.sortStocks(e.target.value)
  }

  

  render(){
    return (
      <div>
  
        <strong>Sort by:</strong>
        <label>
          <input type="radio" value="Alphabetically" checked={this.props.alphaCheck} onChange={this.handleCheck}/>
          Alphabetically
        </label>
        <label>
          <input type="radio" value="Price" checked={this.props.priceCheck} onChange={this.handleCheck}/>
          Price
        </label>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={null}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );

  }
}


export default SearchBar;

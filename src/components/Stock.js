import React from 'react'

class Stock extends React.Component{


  handleClick = () => {
    this.props.clickedStock(this.props.stockObj)
  }

  render(){
    return(
      <div>

        <div className="card" onClick={this.handleClick}>
          <div className="card-body">
            <h5 className="card-title">{
                this.props.stockObj.name
              }</h5>
            <p className="card-text">
                {this.props.stockObj.ticker}: {this.props.stockObj.price}
              </p>
          </div>
        </div>


      </div>

    )
  }
};

export default Stock

import React from 'react';
import Plot from 'react-plotly.js';
import './GraphResult.css';

class GraphResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      companyProfile: {}
    }
  }

  
  handleChange = (e) => {
    const {id, value} = e.target
   // this.state[id] = value
    this.setState({[id]:value})
    
}

  componentDidMount() {
    this.fetchStock();
  }



  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    console.log(StockSymbol);
    let API_Call = `http://localhost:8080/stock-historical-price/5min/${StockSymbol}`;
    let API_CallTWO = `http://localhost:8080/search_ticker/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    
    //Company Profile API Call

    fetch(API_CallTWO)
    .then(response => response.json())
    .then(data => this.setState({companyProfile:data}), () => console.log(this.state))

    // fetch(API_CallTWO)
    //   .then(
    //     function(response) {
    //       return response.json();
    //     }
    //   )
    //   .then(
    //     function(data) {
            
    //     }
    //   )

    //Graph X and Y CORDS API CALL
    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          console.log(data);
          const values = Object.values(data);

          for (var key in data) {
            stockChartXValuesFunction.push(key);
          }
          for(var value in values){
            stockChartYValuesFunction.push(values[value]);
          }

          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {
    return (
      <div>
        {/* this is not working need to fix connection with submit button */}
        <form onSubmit= {this.handleSubmit}>
            <label>Company Search: </label>
            <input
            id = "ticker"
            type = "text"
            maxLength={4}
            required
        /* We are creating a function that is taking an event object and targeting the title value */
            onChange = {this.handleChange}
            />
            <button> Submit </button>
        </form>
        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 720, height: 440, title: this.state.companyProfile.companyName}}
        />
        Company Price: {this.state.companyProfile.price}
        <div className="about-div">
    

        </div>

        <div className="div1">
          <br/>
          <h2>Stock Table</h2>
          <table>
           
              <tr>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>
              <tr>
                <th>Mkt Cap</th>
                <th>P/E Ratio </th>
                <th>Div Yield</th>
              </tr>
              <tr>
                <td>Data</td>
                <td>Data</td>
                <td>Data</td>
              </tr>

          </table>
        </div>

      </div>
      
    )
  }
}

export default GraphResult;
import React from 'react';
import Plot from 'react-plotly.js';
import './GraphResult.css';

class GraphResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      companyProfile: {},
      companyStats: [[]],
      newTickerValue: ""
    }
    this.fetchWeeklyStock = this.fetchWeeklyStock.bind(this);
    this.fetchStock = this.fetchStock.bind(this);
  }


  
  handleChange = (e) => {
    const {id, value} = e.target
   // this.state[id] = value
    this.setState({[id]:value})
    
}

handleNewCompanySearchSubmit = (e) => {
  e.preventDefault();
  this.props.history.push( {pathname: "/graphResults",
      state: {ticker: this.state.newTicker}})
  console.log(this.state);
  this.fetchNewStock();
}

    //in order to refresh we need to capture stockSymbol and run fetchStock all over again bc stockSymbol is being sent from api call in HeroSection submit button.
  componentDidMount() {
    this.fetchStock();
  }

  fetchNewStock(){

    const pointerToThis = this;
    console.log(pointerToThis);
    const StockSymbol = this.state.newTicker;
    console.log(StockSymbol);
    let DAILY_API_CALL = `http://localhost:8080/stock-historical-price/5min/${StockSymbol}`;
    console.log(DAILY_API_CALL);
    let API_CallTWO = `http://localhost:8080/search_ticker/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
  
    //Company Profile API Call
    fetch(API_CallTWO)
    .then(response => response.json())
    .then(data => this.setState({companyProfile:data}), () => console.log(this.state))


    //Graph X and Y CORDS API CALL
    fetch(DAILY_API_CALL)
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
  
  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const StockSymbol = this.props.location.state.ticker;
    console.log(StockSymbol);
    let DAILY_API_CALL = `http://localhost:8080/stock-historical-price/5min/${StockSymbol}`;
    console.log(DAILY_API_CALL);
    let API_CallTWO = `http://localhost:8080/search_ticker/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
  
    //Company Profile API Call
    fetch(API_CallTWO)
    .then(response => response.json())
    .then(data => this.setState({companyProfile:data}), () => console.log(this.state))


    //Graph X and Y CORDS API CALL
    fetch(DAILY_API_CALL)
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

  fetchWeeklyStock(){
    const pointerToThis = this;
    console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    console.log(StockSymbol);
    let WEEKLY_API_CALL = `http://localhost:8080/stock-historical-price/15min/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

     //Graph X and Y CORDS API CALL
     fetch(WEEKLY_API_CALL)
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

  fetchMonthly(){
    const pointerToThis = this;
    console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    console.log(StockSymbol);
    let MONTHLY_API_CALL = `http://localhost:8080/stock-historical-price/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

     //Graph X and Y CORDS API CALL
     fetch(MONTHLY_API_CALL)
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
        <form onSubmit= {this.handleNewCompanySearchSubmit}>
            <label>Company Search: </label>
            <input
            id = "newTicker"
            type = "text"
            maxLength={4}
            required
        /* We are creating a function that is taking an event object and targeting the title value */
            onChange = {this.handleChange}
            />
            <button> Submit </button>
        </form>
       
        <section className="about-div">
        
        {this.state.companyProfile.description}

        </section>
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
        <br/>

        <button onClick={this.fetchStock}>
          Daily Chart!
        </button>

        <button onClick={this.fetchWeeklyStock}>
          Weekly Chart!
          </button>
        
          <button onClick={this.fetchMonthly}>
          Monthly Chart!
          </button>

        <br/>
        
        <h2>Company Price: {this.state.companyProfile.price}</h2>

       
        <div className="div1">
          <br/>
        
          <table>
           
              <tr>
                <th>Sector</th>
                <th>Industry</th>
                <th>Exchange</th>
              </tr>
              <tr>
                <td>{this.state.companyProfile.sector}</td>
                <td>{this.state.companyProfile.industry}</td>
                <td>{this.state.companyProfile.exchange}</td>
              </tr>
              <tr>
                <th>Website</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>{this.state.companyProfile.website}</td>
                <td></td>
                <td></td>
              </tr>

          </table>
        </div>
      </div>
      
      
    )
  }
}

export default GraphResult;
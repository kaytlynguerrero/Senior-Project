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
      companyStats: 0,
      companyMetrics: [{}]
     // newTickerValue: ""
    }
    this.fetchMonthly = this.fetchMonthly.bind(this);
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
    //this.setState(newTickerValue,StockSymbol);
    this.state.newTickerValue = StockSymbol;
    console.log(this.state);
    let DAILY_API_CALL = `http://localhost:8080/stock-historical-price/5min/${StockSymbol}`;
   //console.log(DAILY_API_CALL);
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
        const arrayOfObjects = data[0][0];
        const arrayOfValuesObjects = data[1][0];
         // const values = Object.values(data);'
        //console.log(data[2][0][0]);

         arrayOfObjects.map(({date,close}) => {
          stockChartXValuesFunction.push(date);
          stockChartYValuesFunction.push(close);
       });

       pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
          companyStats: arrayOfValuesObjects,
          companyMetrics: data[2][0][0]
       })
       console.log(pointerToThis);
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
      const arrayOfObjects = data[0][0];
      const arrayOfValuesObjects = data[1][0];

       arrayOfObjects.map(({date,close}) => {
        stockChartXValuesFunction.push(date);
        stockChartYValuesFunction.push(close);
     });

     pointerToThis.setState({
        stockChartXValues: stockChartXValuesFunction,
        stockChartYValues: stockChartYValuesFunction,
        companyStats: arrayOfValuesObjects,
        companyMetrics: data[2][0][0]
     })
     console.log(pointerToThis);
    }
     )
  }

  fetchMonthly(){
    const pointerToThis = this;
    //console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    //console.log(StockSymbol);
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
         const arrayOfObjects = data[0][0];
         const arrayOfValuesObjects = data[1][0];
         const arrayOfCompanyMetrics = data[2][0];
         //let metric = this.state.companyMetrics;

        console.log(arrayOfCompanyMetrics['open']);

        arrayOfObjects.map(({date,close}) => {
           stockChartXValuesFunction.push(date);
           stockChartYValuesFunction.push(close);
        });

        pointerToThis.setState({
           stockChartXValues: stockChartXValuesFunction,
           stockChartYValues: stockChartYValuesFunction,
           companyStats: arrayOfValuesObjects,
           companyMetrics: data[2][0][0]
        })
        console.log(pointerToThis);
       }
     )
  }

  render() {
    return (
      <div>
        {/* this is not working need to fix connection with submit button */}
        <form class = "submitForm"onSubmit= {this.handleNewCompanySearchSubmit}>
            <label>Company Search: </label>
            <input
            id = "newTicker" 
            type = "text"
            maxLength={4}
            value={this.newTickerValue}
            required
        /* We are creating a function that is taking an event object and targeting the title value */
            onChange = {this.handleChange}
            />
            <button> Submit </button>
        </form>
       
        <section className="about-div">
        <h1>Company Description</h1>
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

        <button class= "graphBTN" onClick={this.fetchStock}>
          Daily Chart!
        </button>

        <button  class= "graphBTN" onClick={this.fetchWeeklyStock}>
          Weekly Chart!
        </button>
        
        <button  class= "graphBTN"  onClick={this.fetchMonthly}>
          Monthly Chart!
        </button>

        <br/>
        
        <h2>Company Price: {this.state.companyProfile.price}, Price Percent Change: {this.state.companyStats}</h2>

       
       
        <div className="div1">
          <br/>
        
          <table>
          <tr>
                <th>Open Price</th>
                <th>Lowest Price</th>
                <th>Highest Price</th>
                <th>Closing Price</th>
              </tr>
              <tr>
                <td>{this.state.companyMetrics.open}</td>
                <td>Low price call here</td>
                <td>High price call here</td>
                <td>Close price call here</td>
              </tr>
              <tr>
                <th>Sector</th>
                <th>Industry</th>
                <th>Exchange</th>
                <th>Website</th>
              </tr>
              <tr>
                <td>{this.state.companyProfile.sector}</td>
                <td>{this.state.companyProfile.industry}</td>
                <td>{this.state.companyProfile.exchange}</td>
                <td>{this.state.companyProfile.website}</td>
              </tr>


          </table>
        </div>
      </div>
      
      
    )
  }
}

export default GraphResult;
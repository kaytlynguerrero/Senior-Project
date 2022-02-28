import React from 'react';
import Plot from 'react-plotly.js';
import './GraphResult.css';
import CardItem from '../CardItem';
import Readmore from './Readmore';

class GraphResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: [],
      companyProfile: {
        description: "",
      },
      companyStats: 0,
      companyMetrics: [{}],
      stockPeers: {},
      arrayOfPeers: [],
      stockNews: [{},{},{},{},{},{},{},{}],
      color:"green"
     // newTickerValue: ""

    }
    this.fetchOneYear = this.fetchOneYear.bind(this);
    this.fetchThreeMonth = this.fetchThreeMonth.bind(this);
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
   // console.log(pointerToThis);
    const StockSymbol = this.state.newTicker;
    //this.setState(newTickerValue,StockSymbol);
    this.state.newTickerValue = StockSymbol;
   // console.log(this.state);
    let DAILY_API_CALL = `http://localhost:8080/stock-daily-charts/5min/${StockSymbol}`;
   //console.log(DAILY_API_CALL);
    let API_CallTWO = `http://localhost:8080/search_ticker/${StockSymbol}`;
    let STOCK_NEWS_API = `http://localhost:8080/stocknews/${StockSymbol}`
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
  
    fetch(STOCK_NEWS_API)
    .then(response => response.json())
    .then(data => this.setState({stockNews:data}), () => console.log(this.state))

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
        //const arrayOfObjects = data[0][0];
        const arrayOfValuesObjects = data[1][0];
         // const values = Object.values(data);'
        //console.log(data[2][0][0]);

         data[0][0].map(({date,close}) => {
          stockChartXValuesFunction.push(date);
          stockChartYValuesFunction.push(close);
       });

       pointerToThis.setState({
          stockChartXValues: stockChartXValuesFunction,
          stockChartYValues: stockChartYValuesFunction,
          companyStats: arrayOfValuesObjects,
          companyMetrics: data[2][0][0]
       })
       if(pointerToThis.state.companyMetrics.open > pointerToThis.state.companyMetrics.close) {
        pointerToThis.setState({color:"red"})
      }
      else {
        pointerToThis.setState({color:"green"});
      }
      console.log(pointerToThis);
      })
  }
  
  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);
    const StockSymbol = this.props.location.state.ticker;
    //console.log(StockSymbol);
    let DAILY_API_CALL = `http://localhost:8080/stock-daily-charts/5min/${StockSymbol}`;
    //console.log(DAILY_API_CALL);
    let API_CallTWO = `http://localhost:8080/search_ticker/${StockSymbol}`;
    let STOCK_NEWS_API = `http://localhost:8080/stocknews/${StockSymbol}`;
    let STOCK_PEERS_API = `http://localhost:8080/searchPeers/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];
    let stockPeers = [];
    let stockPeers2 = [];

    //Company Profile API Call
    fetch(API_CallTWO)
    .then(response => response.json())
    .then(data => this.setState({companyProfile:data}), () => console.log(this.state))

    //STock news API
    fetch(STOCK_NEWS_API)
    .then(response => response.json())
    .then(data => this.setState({stockNews:data}), () => console.log(this.state))

    //loop inside it and append a list of state into a table
    //
    //Stock Peers API
    fetch(STOCK_PEERS_API)
    .then(response => response.json())
    .then(data => this.setState({stockPeers:data[0]}), () => console.log(this.state)
    )

    let stocks = 

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
        if(pointerToThis.state.companyMetrics.open > pointerToThis.state.companyMetrics.close) {
          pointerToThis.setState({color:"red"})
        }
        else {
          pointerToThis.setState({color:"green"});
        }
        stockPeers = pointerToThis.state.stockPeers.peersList;
        pointerToThis.setState({arrayOfPeers:stockPeers});

        var mytable = "<table><th> Stock Peers List </th> <tr>";
        for (var CELL of pointerToThis.state.arrayOfPeers) {  
          mytable += "<td>" + CELL + "</td>"; 
        }
        mytable += "</tr></table>";
        document.getElementById("table2").innerHTML = mytable;

        console.log(pointerToThis);
      } )
  }

  fetchWeeklyStock(){
    const pointerToThis = this;
    console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    console.log(StockSymbol);
    let WEEKLY_API_CALL = `http://localhost:8080/stock-daily-charts/15min/${StockSymbol}`;
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
    if(pointerToThis.state.companyMetrics.open > pointerToThis.state.companyMetrics.close) {
      pointerToThis.setState({color:"red"})
    }
    else {
      pointerToThis.setState({color:"green"});
    }
    console.log(pointerToThis);
    })
  }

  fetchMonthly(){
    const pointerToThis = this;
    //console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    //console.log(StockSymbol);
    let time = '1M';
    let MONTHLY_API_CALL = `http://localhost:8080/stock-historical-daily-prices/${time}/${StockSymbol}`;
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

        //console.log(arrayOfCompanyMetrics['open']);

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
        if(pointerToThis.state.companyMetrics.open > pointerToThis.state.companyMetrics.close) {
          pointerToThis.setState({color:"red"})
        }
        else {
          pointerToThis.setState({color:"green"});
        }
        console.log(pointerToThis);
       })
  }

  //3M chart
  fetchThreeMonth(){
    const pointerToThis = this;
    console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    //console.log(StockSymbol);
    let time = '3M';
    let THREE_M_API = `http://localhost:8080/stock-historical-daily-prices/${time}/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

     //Graph X and Y CORDS API CALL
     fetch(THREE_M_API)
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

       // console.log(arrayOfCompanyMetrics['open']);

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
        if(pointerToThis.state.companyMetrics.open > pointerToThis.state.companyMetrics.close) {
          pointerToThis.setState({color:"red"})
        }
        else {
          pointerToThis.setState({color:"green"});
        }
        console.log(pointerToThis);
       })  
  }
  //1Y chart
  fetchOneYear(){
    const pointerToThis = this;
    console.log(pointerToThis);
    let StockSymbol = this.props.location.state.ticker;
    //console.log(StockSymbol);
    let time = '1Y';
    let ONE_YEAR_API = `http://localhost:8080/stock-historical-daily-prices/${time}/${StockSymbol}`;
    let stockChartXValuesFunction = [];
    let stockChartYValuesFunction = [];

     //Graph X and Y CORDS API CALL
     fetch(ONE_YEAR_API)
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

        //console.log(arrayOfCompanyMetrics['open']);

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
        if(pointerToThis.state.companyMetrics.open > pointerToThis.state.companyMetrics.close) {
          pointerToThis.setState({color:"red"})
        }
        else {
          pointerToThis.setState({color:"green"});
        }
        console.log(pointerToThis);
       })
  }
  toggleText() {
    console.log("test");
    // Get all the elements from the page
    var points = 
        document.getElementById("points");

    var showMoreText =
        document.getElementById("moreText");

    var buttonText =
        document.getElementById("textButton");

    console.log(showMoreText);

    // If the display property of the dots 
    // to be displayed is already set to 
    // 'none' (that is hidden) then this 
    // section of code triggers
    if (points.style.display === "none") {

        // Hide the text between the span
        // elements
        showMoreText.style.display = "none";

        // Show the dots after the text
        points.style.display = "inline";

        // Change the text on button to 
        // 'Show More'
        buttonText.innerHTML = "Show More";
    }

    // If the hidden portion is revealed,
    // we will change it back to be hidden
    else {

        // Show the text between the
        // span elements
        showMoreText.style.display = "inline";

        // Hide the dots after the text
        points.style.display = "none";

        // Change the text on button
        // to 'Show Less'
        buttonText.innerHTML = "Show Less";
    }
}

  render() {
    const [color] = 
      this.state.companyMetrics.open > this.state.companyMetrics.close ? ["red"] :
      ["green"]


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

      
        <section className='about-div'>
        {<h1>Company Description</h1>}
        <p>
          {this.state.companyProfile.description.substring(0,250)}
          <span id="points">...</span>
      
          <span id="moreText">{this.state.companyProfile.description.substring(250)}
          </span>
        </p>
        <button onClick={this.toggleText} id="textButton">
        Show More
        </button>
        
        </section>

        <div className="div2">
        <Plot 
          
          //onAfterPlot = {this.handlePercentChange}
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: this.state.color},
              
            }
            
          ]}
          layout={{     
            width: 720, 
            height: 440, 
            title: this.state.companyProfile.companyName
          }}
        />
        </div>
        <br/>

        <button class= "graphBTN" onClick={this.fetchStock}>
          1D
        </button>

        <button  class= "graphBTN" onClick={this.fetchWeeklyStock}>
          5D
        </button>
        
        <button  class= "graphBTN"  onClick={this.fetchMonthly}>
          1M
        </button>

        <button  class= "graphBTN"  onClick={this.fetchThreeMonth}>
          3M
        </button>

        <button  class= "graphBTN" onClick={this.fetchOneYear} >
          1Y
        </button>

        <br/>
        
        <h2>Company Price: {this.state.companyProfile.price} </h2>

        
        <h2> Price Percent Change: <p style={{color}}> {this.state.companyStats} </p> </h2>

       
       
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
                <td>{this.state.companyMetrics.low}</td>
                <td>{this.state.companyMetrics.high}</td>
                <td>{this.state.companyMetrics.close}</td>
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


          <table id="table2" className="table2">
        </table>

        </div>



        <div className='cards'>
       
        <div className='cards__container'>
  
          <div className='cards__wrapper'>
  
            <ul className='cards__items'>
            {/* <Link to ={{pathname: "https://www.marketwatch.com/markets" }} target="_blank" /> */}
              <CardItem 
                src={this.state.stockNews[0].image}
                text={this.state.stockNews[0].text}
                label={this.state.stockNews[0].title}
                path={this.state.stockNews[0].url}
              />
               <CardItem 
                
                src={this.state.stockNews[5].image}
                text={this.state.stockNews[5].text}      
                label={this.state.stockNews[5].title} 
                path={this.state.stockNews[5].url} 
              />
              <CardItem 
      
                src={this.state.stockNews[1].image}
                text={this.state.stockNews[1].text}      
                label={this.state.stockNews[1].title} 
                path={this.state.stockNews[1].url} 
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
               src={this.state.stockNews[2].image}
               text={this.state.stockNews[2].text}      
               label={this.state.stockNews[2].title} 
               path={this.state.stockNews[2].url} 
              />
              <CardItem
                src={this.state.stockNews[3].image}
                text={this.state.stockNews[3].text}      
                label={this.state.stockNews[3].title} 
                path={this.state.stockNews[3].url} 
              />
              <CardItem
                src={this.state.stockNews[4].image}
                text={this.state.stockNews[4].text}      
                label={this.state.stockNews[4].title} 
                path={this.state.stockNews[4].url} 
              />
            </ul>
          </div>
        </div>
      </div>
        

      </div>


      
      
      
    )
  }
}

export default GraphResult;
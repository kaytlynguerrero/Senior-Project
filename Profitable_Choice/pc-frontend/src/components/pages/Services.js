import React, { useState } from 'react';
import '../pages/Services.css'
import StepNavigation from './StepNavigation';
import ReactTooltip from "react-tooltip";
// import Footer from '../Footer'



// function Services(){
//   const labelArray=["What is a stock?", " What is a stock symbol?", ' Search stock symbol', 'What data can you gather?', 'Evaluate the stock data', 'What does the data tell you?'];

//   const [currentStep, updateCurrentStep] = useState(1)

//   function updateStep(step){
//     updateCurrentStep(step);
//   }

//   return(
//     <>
 
//     <div className="bar">
//     <p>Selected Step: {currentStep} </p>
//       <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>

//       <div className="step-desc">

//       {currentStep == 1 &&
//        'A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation.'
//        }

//       {currentStep == 2 &&
//       <figure>
//       <img src='images/stock-ticker-symbols.jpeg'/>
//       <figcaption> A stock symbol is an arrangement of characters—usually letters—representing publicly-traded securities on an exchange.</figcaption>
//       </figure>
//       }
      
//       {currentStep == 3 &&
//       <input data-tip data-for="ticker"
//       id="ticker"
//       type="text"
//       placeholder="AAPL"
//       maxLength={4}>
//       </input>
//       }

//       {currentStep == 4 && 
//       <figure>
//       <img src='images/graph-example.png'/>
//       <figcaption> Price chart displays how a stocks price changes over time. </figcaption>
//       <figcaption>You can select between different time frames to get a better understanding of a stocks performance while viewing the companys profile.</figcaption>
//       </figure>}

//       {currentStep == 5 && 
//       <ul>
//         <h3>For example, you can view data such as:</h3>
//         <br/>
//         <li>Company Name: "Apple Inc."</li>
//         <br/>
//         <li>Industry: "Consumer Electronics"</li>
//         <br/>
//         <li>Company Price: 156.81</li>
//         <br/>
//         <li>Sector: "Technology"</li>
//         <br/>
//         <li>Website: "http://www.apple.com"</li>
//       </ul>
//       }
//       {currentStep == 6 && 
//       <ul>
//         <li>Company Name: The full name for the company</li>
//         <br/>
//         <li>Industry: Refers to a much more specific group of companies/businesses </li>
//         <br/>
//         <li>Company Price: Companys current market value </li>
//         <br/>
//         <li>Sector: Identified by what the stock is most common for in their industry </li>
//         <br/>
//         <li>Website: Official website</li>
//       </ul>
      
//       }
  
      

      
      
//       <div> 
//       <ReactTooltip id="ticker" place="top" effect="solid">
//         Here, you insert a companys' symbol that will retrieve their stock data 
//       </ReactTooltip>
//       </div>
//       <br/>
//       <button className="primaryButton" onClick={ () => updateStep(currentStep-1)}>Previous Step</button>
//       <button className="primaryButton" onClick={ () => updateStep(currentStep+1)}>Next Step</button>   
//       </div>
//       </div>

     
//       {/* <Footer /> */}
// </>
//   )

// }
// export default Services;


function Services() {


return(
<>

<div className='hero-container2'>
       <img className="stockphoto" src='images/stockmarketphoto.jpeg'/>
<h1> A GUIDE TO STOCK BASICS </h1>


</div>

<div className="articleDiv"> 


{/* Step 1 */}



<h1 className="titleHeaders"> &#8594; Stocks &#8592;</h1>

<div>

<h1 className = "headers"> 1. What is a stock?</h1>

<p1 className="definitions"> A stock is a share in the ownership of a company. < br/> A stock exchange, or stock market, is a system for buying and selling securities, or stocks and bonds. < br/>   </p1>

< br/>
< br/>


{/* Step 2 */}



<h1 className = "headers"> 2. What is a stock symbol?</h1>
<p1 className="definitions" > 
<figure>
      <img src='images/stock-ticker-symbols.jpeg'/>
    <figcaption> A stock symbol is an arrangement of characters—usually letters—representing publicly-traded securities on an exchange. <br /> In the photo above, the symbols are represented in the circled elements. </figcaption>
    </figure>
</p1>

< br/>
< br/>
{/* Step 3 */}
<h1 className = "headers"> 3. Search a stock symbol</h1>
<p1 className="definitions"> Below, is an example of how you would search a stock symbol within our website. You would search it through its symbol and receive company data. 
    < br />
<p1 id="ticker2"> Ticker Search: </p1><input data-tip data-for="ticker" 
      id="ticker2"
      type="text"
      placeholder="NYT"
      maxLength={4}>
      </input>
</p1>

{/* Step 4 */}

< br/>
< br/>
<h1 className="titleHeaders"> &#8594; Stock Data &#8592;</h1>
<h1 className = "headers"> 4. What data can you gather?</h1>
<p1 className="definitions">
       <figure>
       <img src='images/graph-example.png'/>
       <figcaption> Price chart displays how a stocks price changes over time. </figcaption>
       <figcaption>You can select between different time frames to get a better understanding of a stocks performance while viewing the companys profile.</figcaption>
       </figure>
</p1>

< br/>
< br/>

{/* Step 5 */}
<h1 className = "headers"> 5. Evaluate the stock data</h1>
<p1 className="definitions">
<ul>
         <h3>For example, you can view data such as:</h3>
         <br/>
         <li>Company Name: "Apple Inc."</li>
         <br/>
         <li>Industry: "Consumer Electronics"</li>
         <br/>
         <li>Company Price: 156.81</li>
         <br/>
         <li>Sector: "Technology"</li>
         <br/>
         <li>Website: "http://www.apple.com"</li>
       </ul>
</p1>

< br/>
< br/>
{/* Step 6 */}
<h1 className = "headers"> 6. What does the data tell you?</h1>
<p1 className="definitions">
       <ul>
         <li>Company Name: The full name for the company</li>
         <br/>
         <li>Industry: Refers to a much more specific group of companies/businesses </li>
         <br/>
         <li>Company Price: Companys current market value </li>
         <br/>
         <li>Sector: Identified by what the stock is most common for in their industry </li>
         <br/>
         <li>Website: Official website</li>
       </ul>
</p1>

< br/>
< br/>

</div>

</div>
</>


)

}
export default Services;

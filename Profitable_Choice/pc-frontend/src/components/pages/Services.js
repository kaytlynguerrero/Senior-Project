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

<h1> What is a stock?</h1>
<div className = "stock">
<p1> A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation. </p1>
</div>
</>


)

}
export default Services;

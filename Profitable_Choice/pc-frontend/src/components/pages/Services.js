import React, { useState } from 'react';
import StepNavigation from './StepNavigation';
import ReactTooltip from "react-tooltip";
// import Footer from '../Footer'



function Services(){
  const labelArray=["What is a stock?", " What is a stock symbol?", ' Search stock symbol', 'What data can you gather?', 'Evaluate the stock data', 'What does the data tell you?', ' Other ways to evaluate the data', 'Graph example'];

  const [currentStep, updateCurrentStep] = useState(1)

  function updateStep(step){
    updateCurrentStep(step);
  }

  return(
    <>
 
    <div className="bar">
    <p>Selected Step: {currentStep} </p>
      <StepNavigation labelArray={labelArray} currentStep={currentStep} updateStep={updateStep}></StepNavigation>

      <div className="step-desc">

      {currentStep == 1 &&
       'A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation.'
       }

      {currentStep == 2 &&
      <figure>
      <img src='images/stock-ticker-symbols.jpeg'/>
      <figcaption> A stock symbol is an arrangement of characters—usually letters—representing publicly-traded securities on an exchange.</figcaption>
      </figure>
      }
      
      {currentStep == 3 &&
      <input data-tip data-for="ticker"
      id="ticker"
      type="text"
      placeholder="AAPL"
      maxLength={4}>
      </input>
      }

      {currentStep == 4 && 
      'You can gather a companys profile and view their industy, price, description, sector, etc.'}

      {currentStep == 5 && 
      <ul>For example, you can view data such as:
        <li>Company Name: "Apple Inc."</li>
        <li>Industry: "Consumer Electronics"</li>
        <li>Company Price: 156.81</li>
        <li>Sector: "Technology"</li>
        <li>Website: "http://www.apple.com"</li>
      </ul>
      }
      {currentStep == 6 && 
      <ul>
        <li>Company Name: The full name for the company</li>
        <li>Industry: Refers to a much more specific group of companies/businesses </li>
        <li>Company Price: Companys current market value </li>
        <li>Sector: Identified by what the stock is most common for in their industry </li>
        <li>Website: Official website</li>
      </ul>
      
      }
      {currentStep == 7 && ''}
      {currentStep == 8 && ''}

      
      
      <div> 
      <ReactTooltip id="ticker" place="top" effect="solid">
        Here, you insert a companys' symbol that will retrieve their stock data 
      </ReactTooltip>
      </div>
      <br/>
      <button className="primaryButton" onClick={ () => updateStep(currentStep-1)}>Previous Step</button>
      <button className="primaryButton" onClick={ () => updateStep(currentStep+1)}>Next Step</button>   
      </div>
      </div>

     
      {/* <Footer /> */}
</>
  )

}
export default Services;

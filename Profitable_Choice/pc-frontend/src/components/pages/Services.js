
// import React from 'react';
// import ReactDOM from 'react-dom';
// class Services extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       currentStep: 1,
//       email:  '',
//       username: '',
//       password: '', 
//     }
//   }

//   handleChange = event => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })    
//   }
   
//   handleSubmit = event => {
//     event.preventDefault()
//     const { email, username, password } = this.state
//     alert(`Your registration detail: \n 
//            Email: ${email} \n 
//            Username: ${username} \n
//            Password: ${password}`)
//   }
  
//   _next = () => {
//     let currentStep = this.state.currentStep
//     currentStep = currentStep >= 2? 3: currentStep + 1
//     this.setState({
//       currentStep: currentStep
//     })
//   }
    
//   _prev = () => {
//     let currentStep = this.state.currentStep
//     currentStep = currentStep <= 1? 1: currentStep - 1
//     this.setState({
//       currentStep: currentStep
//     })
//   }

// /*
// * the functions for our button
// */
// previousButton() {
//   let currentStep = this.state.currentStep;
//   if(currentStep !==1){
//     return (
//       <button 
//         className="btn btn-secondary" 
//         type="button" onClick={this._prev}>
//       Previous
//       </button>
//     )
//   }
//   return null;
// }

// nextButton(){
//   let currentStep = this.state.currentStep;
//   if(currentStep <3){
//     return (
//       <button 
//         className="btn btn-primary float-right" 
//         type="button" onClick={this._next}>
//       Next
//       </button>        
//     )
//   }
//   return null;
// }
  
//   render() {    
//     return (
//       <React.Fragment>
//       <h1>React Wizard Form 🧙‍♂️</h1>
//       <p>Step {this.state.currentStep} </p> 

//       <form onSubmit={this.handleSubmit}>
//       {/* 
//         render the form steps and pass required props in
//       */}
//         <Step1 
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           email={this.state.email}
//         />
//         <Step2 
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           username={this.state.username}
//         />
//         <Step3 
//           currentStep={this.state.currentStep} 
//           handleChange={this.handleChange}
//           password={this.state.password}
//         />
//         {this.previousButton()}
//         {this.nextButton()}

//       </form>
//       </React.Fragment>
//     );
//   }
// }

// function Step1(props) {
//   if (props.currentStep !== 1) {
//     return null
//   } 
//   return(
//     <div className="form-group">
//       <label htmlFor="email">Email address</label>
//       <input
//         className="form-control"
//         id="email"
//         name="email"
//         type="text"
//         placeholder="Enter email"
//         value={props.email}
//         onChange={props.handleChange}
//         />
//     </div>
//   );
// }

// function Step2(props) {
//   if (props.currentStep !== 2) {
//     return null
//   } 
//   return(
//     <div className="form-group">
//       <label htmlFor="username">Username</label>
//       <input
//         className="form-control"
//         id="username"
//         name="username"
//         type="text"
//         placeholder="Enter username"
//         value={props.username}
//         onChange={props.handleChange}
//         />
//     </div>
//   );
// }

// function Step3(props) {
//   if (props.currentStep !== 3) {
//     return null
//   } 
//   return(
//     <React.Fragment>
//     <div className="form-group">
//       <label htmlFor="password">Password</label>
//       <input
//         className="form-control"
//         id="password"
//         name="password"
//         type="password"
//         placeholder="Enter password"
//         value={props.password}
//         onChange={props.handleChange}
//         />      
//     </div>
//     <button className="btn btn-success btn-block">Sign up</button>
//     </React.Fragment>
//   );
// }

// ReactDOM.render(<Services />, document.getElementById('root'))
// export default Services;

// import '../../App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Button, ButtonGroup, Panel } from 'rsuite';
// import { Steps } from 'rsuite';

// const Services = () => {
//   const[step,setStep] = React.useState(0);
//   const onChange = nextStep => {
//     setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
//   };

//   const onNext = () => onChange(step+1);
//   const onPrevious = () => onChange(step-1);

//   return(
//     <div>
//       <Steps current={step}>
//         <Steps.Item title="Finished" description="Desc" />
//         <Steps.Item title="In Progress" description="Description" />
//         <Steps.Item title="Waiting" description="Description" />
//         <Steps.Item title="Waiting" description="Description" />
//       </Steps>
//       <hr />
//       <Panel header={`Step: ${step + 1}`}>

//       </Panel>
//       <hr />
//       <ButtonGroup>
//         <Button onClick={onPrevious} disabled ={step === 0}>
//           Previous
//         </Button>

//         <Button onClick={onNext} disabled={step===3}>
//           Next
//         </Button>
//       </ButtonGroup>
//     </div>
//   )
// }
// ReactDOM.render(<Services />)










import React, { useState } from 'react';
import StepNavigation from './StepNavigation';
import ReactTooltip from "react-tooltip";
import Footer from '../Footer'



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

      

      <div>

      {currentStep == 1 &&
       'Stock: A stock is a form of security that indicates the holder has proportionate ownership in the issuing corporation.'}
      {currentStep == 2 && 'Stock Symbol: A stock symbol is an arrangement of characters—usually letters—representing publicly-traded securities on an exchange.'}
      
      {currentStep == 3 &&
      <input data-tip data-for="ticker"
      id="ticker"
      type="text"
      placeholder="AAPL"
      maxLength={4}>
      </input>}

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

     
      <Footer />
</>
  )

}
export default Services;

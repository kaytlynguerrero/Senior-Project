import React, { useState } from 'react';
import Step from './Step';
import './Step.css';

export default function stepNavigation(props){
    return(
        <div className="stepWrapper">
            {props.labelArray.map((item,index) => <Step key={index} 
            index={index} 
            label={item} 
            selected={props.currentStep === index + 1} 
            updateStep={props.updateStep}></Step>)}
        </div>
    )
}
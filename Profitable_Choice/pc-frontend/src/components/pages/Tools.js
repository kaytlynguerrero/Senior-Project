import { Steps } from 'rsuite';
import React, {useState, useEffect} from "react";
import { Button, IconButton, ButtonGroup, ButtonToolbar } from 'rsuite';

function Tools() {
    return <div>
      Steps

    </div>

}
export default Tools;


// function Tools() {
//     const[step, setStep] = React.useState(0);
//     const onChange = nextStep => {
//         setStep(nextStep < 0 ? 0 : nextStep > 3 ? 3 : nextStep);
//     };
//     const onNext = () => onChange(step + 1);
//     const onPrevious = () => onChange(step -1);

//     return(
//         <div>
//             <Steps current={step}>
//             <Steps.Item title="Search Company" description="Description" />
//             <Steps.Item title="Read Data" description="Description" />
//             <Steps.Item title="Step 3" description="Description" />
//             <Steps.Item title="Step 4" description="Description" />
//             </Steps>
//             <hr/>
//             <ButtonGroup>
//                 <Button onClick={onPrevious} disabled={step === 0}>
//                 Previous
//                 </Button>
//                 <Button onClick={onNext} disabled={step === 3}>
//                 Next
//                 </Button>
//             </ButtonGroup>
//         </div>
//     )
// }
// export default Tools;

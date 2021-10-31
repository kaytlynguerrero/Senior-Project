// dummy component
// This component will be used as a page that is loaded by the router

import { useState } from "react"

// Create function that is creating a title (ticker)
const Create = () => {
    // we are creating the state of the ticker input to track it and send it back to the BE
    const [ticker, setTicker] = useState('');

    const handleSubmit = (e) => {
            /* This prevents the page from being refreshed when submitting the input */
        e.preventDefault();
        const logTicker = {ticker};
        console.log()

    }
    return (
        <div className = "create">
            <h2> Input Ticker! </h2>
            <form onSubmit= {handleSubmit}>
                <label>Ticker: </label>
                <input
                type = "text"
                maxLength={4}
                required
                value={ticker}
             /* We are creating a function that is taking an event object and targeting the title value */
                onChange = {(e) => setTicker(e.target.value)}
                />
                <button> Submit </button>
                {/* Printing the tracked input from the input box */}
                <p> {ticker} </p>
            </form>
             </div>
    )

}
// function TickerSearchPage() {
//     return <div>
//         Ticker Search Page

//     </div>

// }
export default Create;
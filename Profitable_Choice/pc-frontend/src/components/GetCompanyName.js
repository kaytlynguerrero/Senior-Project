import React, {useState} from "react";

function GetCompanyName(props) {
    const StockSymbol = props.ticker;
    let API_CALL = `http://localhost:8080/search_ticker/${StockSymbol}`;
    console.log(StockSymbol);
    //format: const{nameOfKey, setNameOfKey} = useState("data structure");
    const {companyName, setCompanyName} = useState("");

    fetch(API_CALL)
    .then(response => response.json())
    .then(data => setCompanyName(data.companyName), () => console.log(companyName))

    return(
        <h1>
            {companyName}
        </h1>
    );
}
export default GetCompanyName;
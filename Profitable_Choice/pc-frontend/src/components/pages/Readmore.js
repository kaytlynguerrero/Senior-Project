import React, {useState} from "react";

function ShowMore(props){
    const [showMore, setshowMore] = useState(false);
    const {text}= props.description
    console.log(text);
    return (
        <div>
            <h1>Company Description</h1>
            <h6>
                {showMore ? text : `${text.substring(0, 100)}`}
                <button onClick={ () => setshowMore(!showMore)}>
                Show more</button>
            </h6>
        </div>
    );
}

export default ShowMore;
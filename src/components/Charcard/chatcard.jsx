import React from 'react';


function Chatcard(props) {

    return (
        <div className="Chat">
            <p>  {props.message}  </p>
            <p>  {props.author}   </p>
            <p>   {props.date}    </p>
        </div>
    );
}

export default Chatcard;
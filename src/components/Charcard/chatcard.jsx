import React from 'react';


function Chatcard(props) {

    return (
        <div className="chattext">
            <p>  {props.message}  </p>
            <div class="text"> {props.author}{" "}
              {props.date}    </div>
        </div>
    );
}

export default Chatcard;
import React from 'react';
import data from "../../data.json";
import Chatcard from "../Charcard/chatcard.jsx"
function Chat() {
    return (
        <div className="box-color">
            {data.map(({message, username, date}) =>
                (<Chatcard
                message={message}
                author={username}
                date={date} />)
            )
            }

        </div>

    );
}

export default Chat;
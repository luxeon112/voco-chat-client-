import React from 'react';
import data from "../../data.json";

function Chat(props) {
    return (
        <div className="box-color">
            {data.map((item) => {
                return (<chatcard
                message={item.message}
                author={item.username}
                date={item.date} />)
            })
            }

        </div>

    );
}

export default Chat;
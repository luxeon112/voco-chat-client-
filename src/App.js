import React from 'react';

import './App.css';
import Chat from "./components/chat/chat";
import Chatcard from "./components/Charcard/chatcard";
import Input from "./input.jsx";

function App() {
  return (

        <div className="class-test">
            <div className="chatbox">

            <Chat />
            <Input/>
            </div> </div>
  );
}

export default App;

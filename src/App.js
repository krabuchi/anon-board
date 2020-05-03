import React, { useState, useEffect } from "react";

import Form from "./forms/form";
import MessageList from "./messageList/messageList";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/messages`)
      .then((response) => response.json())
      .then((result) => setMessages([...result]));
  }, []);

  return (
    <div>
      <Form />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;

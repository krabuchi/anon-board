import React, { useState } from "react";
import axios from "axios";

function Form() {
  const api = "http://localhost:3000/messages";
  const initialState = { name: "", content: "", id: 0 };
  const [message, setMessage] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch(api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((response) => response.json())
      .then((createdMessage) => {
        console.log(createdMessage);
      });
    setMessage(initialState);
  };

  return (
    <form style={formStyle} onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input
        className="u-full-width"
        onChange={handleInputChange}
        type="text"
        id="name"
        name="name"
        value={message.name}
      />

      <label>Message</label>
      <textarea
        className="u-full-width"
        onChange={handleInputChange}
        type="text"
        id="message"
        name="content"
        value={message.content}
      ></textarea>

      <button className="button-primary" type="submit">
        send your message!
      </button>
    </form>
  );
}

const formStyle = {
  width: "50%",
  margin: "0 auto",
};

export default Form;

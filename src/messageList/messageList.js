import React from "react";

function MessageList({ messages }) {
  const list = messages.map((message) => (
    <div key={message._id} style={listStyle}>
      <h6>{message.name}</h6>
      <p> {message.content}</p>
      <small>{message.created}</small>
    </div>
  ));
  return <div style={style}>{list}</div>;
}

const style = {
  width: "50%",
  margin: "0 auto",
};

const listStyle = {
  border: "1px solid #595959",
  borderRadius: "5px",
  margin: "5px 0",
  padding: "5px",
};

export default MessageList;

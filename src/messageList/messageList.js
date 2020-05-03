import React from "react";

function MessageList({ messages }) {
  let date = new Date(message.created);
  const list = messages.map((message) => (
    <div key={message._id} style={listStyle}>
      <small>{date}</small>
      <h6>{message.name}</h6>
      <p> {message.content}</p>
    </div>
  ));
  return <div style={style}>{list}</div>;
}

const style = {
  width: "50%",
  margin: "0 auto",
};

const listStyle = {
  border: "1px solid #f2f2f2",
  borderRadius: "5px",
};

export default MessageList;

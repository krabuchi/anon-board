import React from "react";

function MessageList({ messages }) {
  const list = messages.reverse().map((message) => {
    const date = new Date(message.created);
    const { name, content, _id } = message;
    return (
      <div key={_id} style={listStyle}>
        <h6>{name}</h6>
        <p> {content}</p>
        <small>{date.toLocaleString("en-GB", { timeZone: "GMT" })}</small>
      </div>
    );
  });
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

import React from "react";

const MessageForm = () => {
  we have created prevent
  const handleMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message!</h2>
      <form onSubmit={handleMessage}></form>
    </div>
  );
};
export default MessageForm;

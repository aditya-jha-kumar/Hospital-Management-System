import React from "react";

const MessageForm = () => {
  we have created preventDefault so that our page does not refreshes wh
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

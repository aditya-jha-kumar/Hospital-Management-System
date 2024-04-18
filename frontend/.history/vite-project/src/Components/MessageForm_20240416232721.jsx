import React from "react";

const MessageForm = () => {
  const []
  const handleMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container form-component message-form">
      <h2>Send Us A Message!</h2>
      <form onSubmit={handleMessage}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default MessageForm;
// we have created preventDefault so that our page does not refreshes when our form is submitted

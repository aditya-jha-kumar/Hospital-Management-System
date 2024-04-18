import { catchAsyncErrors } from "../middleware/catchAsyncErrors.js";
import { Message } from "../models/messageSchema.js";
import ErrorHandler from "../middleware/errorMiddleware.js";

export const sendMessage = catchAsyncErrors(async (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;
  if (!firstName || !lastName || !email || !phone || !message) {
    return next(new ErrorHandler("Please provide all fields", 400));
  } else {
    await Message.create({ firstName, lastName, email, phone, message });
    // Additional logic for sending the message can be added here
    // Assuming the message is successfully sent, return a success response
    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
    });
  }
});

// export const catchAsyncErrors = (theFunction) => {
//   return (req, res, next) => {
//     Promise.resolve(theFunction(req, res, next)).catch(next);
//   };
// };
export const catchAsyncErrors = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next))
      .then((result) => {
        // If the function resolves successfully, pass the result to the next middleware
        next();
      })
      .catch((error) => {
        // If an error occurs, pass it to the next middleware with the error status and message
        res.status(500).json({
          success: false,
          error: {
            message: error.message || "Internal Server Error",
          },
        });
      });
  };
};

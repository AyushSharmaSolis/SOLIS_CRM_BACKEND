module.exports = {
  sendResponse: (res, success, statusCode, message, data) => {
    res.status(statusCode).json({ success, message, data });
  },
};

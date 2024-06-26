const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("GET / This is the root URL");
});

app.use((req, res, next) => {
  const err = new Error(`Sorry, the requested resource couldn't be found`);
  err.statusCode = 404;
  err.message = `2Sorry, the requested resource couldn't be found`;
  next(err);
});

// catch-all error handler to pre-empt the xprs built in
app.use((err, req, res, next) => {
  // console.log(err.message);
  // console.log(err.statusCode);
  const status = err.statusCode || 500;
  res.status(status);
  res.json({
    message: err.message,
    statusCode: status
  });
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));

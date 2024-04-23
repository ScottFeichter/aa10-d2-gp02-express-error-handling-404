const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('GET / This is the root URL');
});

// catch-all error handler to pre-empt the xprs built in
app.use((req, res, next) => {
  const err = new Error;
  err.message = "Sorry the requested resourc couldn't be found";
  err.statusCode = "404";
  console.log(err.message);
  console.log(err.statusCode);
  next(err);
});

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));

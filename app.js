// call the packages we need
const express = require('express'); // call express
const app = express(); // define our app using express
const bodyParser = require('body-parser');
const router = require('./router/routes');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000; // set our port


// REGISTER THE ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('APIs are listening on port  '+ port);

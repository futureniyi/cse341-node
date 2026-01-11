// express web server
const express = require('express');
// const connectDB = require('./db/connection');
const app = express();

// connectDB();

const port = process.env.PORT || 3000;

app.use('/', require('./routes'));
 
app.listen(port, () => {console.log(`Running on port ${port}`)});
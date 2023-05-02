const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const chefs = require('./data/data.json');



app.use(cors());


app.get('/', (req, res) => {
    res.send('Welcome to the Recipe monstar server')
  });


  app.listen(port, () => {
    console.log(`Recipe monstar server is running on the port:${port}`)
  });
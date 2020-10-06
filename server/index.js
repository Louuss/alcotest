const express = require('express');
//const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.port || 5000;

const drinks = require('./routes/api/drinks');
app.use('/api/drinks', drinks);
app.listen(port, () => { console.log(`Server started at ${port}`)});
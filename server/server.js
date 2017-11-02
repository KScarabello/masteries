const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser');
const config = require('../config');
const ec = require('./eventController.js')

const app = express();

app.use(bodyParser.json());
app.use(cors());

// massive connection string to database

massive(config.dblink).then(db => {
    app.set('db', db)
})


app.get('/api/events', ec.getEvents);


const port = 3001;
app.listen(port, () => {console.log(`the server is listening on ${port}`)})
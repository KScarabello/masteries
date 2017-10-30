const express = require('express');
const cors = require('cors');
const massive = require('massive');
const bodyParser = require('body-parser');
const config = require('../config');

const app = express();

app.use(bodyParser.json());

// massive connection string to database

massive(config.dblink).then(db => {
    app.set('db', db)
    app.get('db').seed_file().then(res => {
        console.log(res)

}).catch(err => {
    console.log(err)
})
})


const port = 3001;
app.listen(port, () => {console.log(`the server is listening on ${port}`)})
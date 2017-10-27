const express = require('express');
const cors = require('cors');
const massive = require('express');

const app = express();

app.use(bodyParser.json());

//massive connection string to database

// massive(connectionString).then(db => {
//     app.set('db', db)
//     app.get('db').init.seed_file().then(res => {
//         console.log(res)
//     })
// }).catch(err => {
//     console.log(err)
// })


const port = 3001;
app.listen(port, () => {console.log(`the server is listening on ${port}`)})
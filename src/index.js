const express = require('express');
const mongoose =  require('mongoose');

//init app 
const port = process.env.PORT || 4000;
const app = express();

//connect 

const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017
// const DB_HOST = '172.18.0.2';
const DB_HOST = 'mongo'
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(()=> console.log('connected to database')).catch((err) => console.log("failed to connect to database: " , err))


app.get('/', (req, res) => {
    res.send("<h1> hello tresmerge dev    </h1>"); 
})
app.listen(port, () => console.log(`listening on port : ${port}`));





// "start-dev": "nodemon --legacy-watch src/index.js"
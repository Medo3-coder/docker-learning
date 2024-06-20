const express = require('express');
const mongoose =  require('mongoose');
const redis = require('redis');
const {Client} = require('pg');
//init app 
const port = process.env.PORT || 4000;
const app = express();



//connect: to postgres db
// const DB_USER = 'root';
// const DB_PASSWORD = 'example';
// const DB_PORT = 5432
// // const DB_HOST = '172.18.0.2';
// const DB_HOST = 'postgres'
// const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;

// const client = new Client({
//     connectionString: URI,
//   });
 
// client.connect().then(()=> console.log('connected to postgres database'))
// .catch((err) => console.log("failed to connect to database: " , err));


//connect to redis db                // https://www.npmjs.com/package/redis
const REDIS_PORT  = 6379;
const REDIS_host = 'redis';
const redisClient = redis.createClient({
    url: `redis://${REDIS_host}:${REDIS_PORT}`
});

redisClient.on('error', err => console.log('Redis Client Error', err))
  .connect(console.log('connected to redis...',));



// connect: mongo db
const DB_USER = 'root';
const DB_PASSWORD = 'example';
const DB_PORT = 27017
// const DB_HOST = '172.18.0.2';
const DB_HOST = 'mongo'
const URI = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose.connect(URI).then(()=> console.log('connected to database')).catch((err) => console.log("failed to connect to database: " , err))


app.get('/', (req, res) => {
    redisClient.set('products' , 'products......');
    res.send("<h1> Momtaz Diff    </h1>"); 
});



app.get('/data', async (req, res) => {
    const products = await  redisClient.get('products');
    res.send(`<h1> hello tresmerge dev</h1> <h2>${products}</h2>`); 
})

app.listen(port, () => console.log(`listening on port : ${port}`));





// "start-dev": "nodemon --legacy-watch src/index.js"
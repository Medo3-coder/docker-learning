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
    res.send(`
      body {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
    font-family: 'Comic Sans MS', cursive, sans-serif;
    color: #fff;
    text-align: center;
    padding: 50px;
}

h1 {
    font-size: 3em;
    margin-bottom: 20px;
    text-shadow: 2px 2px #ff0000;
    animation: sparkles 2s infinite;
}

p {
    font-size: 1.5em;
    margin-bottom: 30px;
}

button {
    background-color: #ff4081;
    color: white;
    padding: 15px 30px;
    border: none;
    border-radius: 50px;
    font-size: 1.2em;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #ff79a6;
}

@keyframes sparkles {
    0% {
        text-shadow: 2px 2px #ff0000, -2px -2px #00ff00;
    }
    50% {
        text-shadow: 4px 4px #00ff00, -4px -4px #ff0000;
    }
    100% {
        text-shadow: 2px 2px #ff0000, -2px -2px #00ff00;
    }
}

.confetti {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}

.confetti-piece {
    position: absolute;
    width: 10px;
    height: 30px;
    background-color: #f2b632;
    opacity: 0.8;
    animation: fall 3s linear infinite;
}

@keyframes fall {
    0% {
        transform: translateY(-100%);
        opacity: 1;
    }
    100% {
        transform: translateY(100%);
        opacity: 0;
    }
}

      <body>
    <h1>Congratulations!</h1>
    <p>Let's celebrate this special moment with joy and happiness.</p>
    <button>Celebrate</button>
    <div class="confetti">
        <div class="confetti-piece" style="left: 10%; animation-duration: 2s;"> Eid Mubrak ya mony</div>

    </div>
</body>
      `); 
});



app.get('/data', async (req, res) => {
    const products = await  redisClient.get('products');
    res.send(`<h1> hello tresmerge dev</h1> <h2>${products}</h2>`); 
})

app.listen(port, () => console.log(`listening on port : ${port}`));





// "start-dev": "nodemon --legacy-watch src/index.js"
const express = require('express');

//init app 
const port = process.env.PORT || 4000;
const app = express();

app.get('/', (req, res) => {
    res.send("<h1> hello tresmerge ! hi   </h1>"); 
})
app.listen(port, () => console.log(`listening on port : ${port}`));





// "start-dev": "nodemon --legacy-watch src/index.js"
const express = require('express');

//init app 
const port = 4000;
const app = express();

app.get('/', (req, res) => {
    res.send("<h1> Welcome man in dev</h1>");
})
app.listen(port, () => console.log(`listening on port : ${port}`));



const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
    console.log(`app is listening on ${port}`)
});

// this starts a server , to stop press control + C
// check the server on localhost:3000

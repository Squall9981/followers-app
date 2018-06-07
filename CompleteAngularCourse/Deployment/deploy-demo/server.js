const express = require('express');
const app = express();

//Host static content from dist folder, where build is stored
app.use(express.static(__dirname + '/dist'));

// .... add API endpoints here

//Catch all invalid routes, send index.html to client if invalid route.
app.all('*', (req, res) => {
    res.status(200).sendFile(__dirname = '/dist/index.html');
});

//Listen on environment port
app.listen(process.env.PORT || 8080);
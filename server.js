const https = require('https');
const fs = require('fs');
const express = require('express');
const path = require('path');

const options = {
  key: fs.readFileSync( './keys/localhost.key' ),
  cert: fs.readFileSync( './keys//localhost.cert' ),
  requestCert: false,
  rejectUnauthorized: false
};

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/baby-book'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname+'/dist/baby-book/index.html'));
});

// Start the app by listening on the default Heroku port



app.listen(process.env.PORT || 9080);

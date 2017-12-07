var express = require('express');
var app = express();
var routes = require('./lib/index.js');

routes.setup(app);

app.listen(3000, function() { 
    console.log('microlendingAPI listening on port 3000');
});

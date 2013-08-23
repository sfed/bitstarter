var express = require('express');
var app = express();
var fs = require('fs');
var index_buf= fs.readFileSync(index.html);

app.use(express.logger());

app.get('/', function(request, response) {
    
    response.send(index_buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

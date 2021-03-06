var express = require('express')
var compression = require('compression')
var app = express()

app.use(compression());
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/build'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
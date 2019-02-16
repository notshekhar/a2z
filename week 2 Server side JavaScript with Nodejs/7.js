let express = require('express');
let app = express();
let server = app.listen(3000);

//static file
app.use(express.static('public'));

//query string
app.get('/someroute', (request, response) => {
  let name = request.query.name;
  response.send("<h1>hello "+name+"!</h1>");
})
app.get('/someroute', (request, response) => {
  let name = request.query.name;
  response.send("hello "+name+"!");
})
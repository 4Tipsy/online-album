// Require packages and set the port
const fs = require('fs');
const express = require('express')

const port = 5000
const app = express()



// CORS че-то тама
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});




app.get('/get-imgs', (request, response) => {
  
  let imgs = fs.readFileSync('users-imgs-folders/example/structure.json', 'utf8')
  response.send(imgs);
});

app.post('/', (request, response) => {
  
  
  let users = JSON.parse(fs.readFileSync('server-js/users.json', 'utf8'))


  response.send('done');
});









// Start the server
const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);

  console.log(`Server listening on port ${server.address().port}`);
});
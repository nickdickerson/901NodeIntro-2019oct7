const express = require('express') ; 
const app = express() ; 
const port = 3000;

app.get('/', (request, response) => {  
  response.send('Hello from Express!')
})

app.get('/test', (request, response) => {  
  response.send('Hello from TEST!')
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Server running at http://localhost:${port}/`);
})


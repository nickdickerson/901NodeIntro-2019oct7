const axios = require('axios');

axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
  .then(response => {
    console.log(response.data.url);
    console.log(response.data.explanation);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  
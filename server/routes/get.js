const express = require('express');
const multer = require('multer');
const router = express.Router();
const axios = require('axios');
const upload = multer();

var FormData = require('form-data');
var fs = require('fs');
var path = require('path');

router.get('/', (req, res) => {
    res.send('Server is running');
});

router.get('/test', (req, res) => {
    axios.post('http://localhost:5000/api/test')
    .then(res => {
        console.log(res.data);
    })
    .catch(error => {
        console.error(error);
    });
    res.send('Test successful');
});

router.get('/image', (req, res) => {
  var bodyFormData = new FormData();
  bodyFormData.append('images', fs.createReadStream(path.join(__dirname, 'public/image.jpeg')));
  axios({
    method: 'post',
    url: 'https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=2b10pc7gsNZ3scNMqmggjWh1a',
    data: bodyFormData,
    headers: {'Content-Type': 'multipart/form-data' }
  })
  .then(response => {
      console.log(response.data);
      res.send(response.data);
  })
  .catch(error => {
      console.error(error);
  });
  // res.sendFile('public/Sunflower_sky_backdrop.jpeg', { root : __dirname});
});

module.exports = router;

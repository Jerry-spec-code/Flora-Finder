const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.send({message : "Server"});
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

router.post('/test', (req, res) => {
    res.send({message : "This is a test"});
})

router.post('/image', (req, res) => {
    const bodyFormData = new FormData();
    const url = `https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=${process.env.API_KEY}`;
    bodyFormData.append('images', req.body.file);
    axios({
      method: 'post',
      url: url,
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
});

module.exports = router;

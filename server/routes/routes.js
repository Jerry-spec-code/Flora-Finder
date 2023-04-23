const express = require('express');
const router = express.Router();
const axios = require('axios');

const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const { parseFloraData } = require('../service/parse');

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
    console.log('made it here 1');
    // const bodyFormData = new FormData();
    // const url = `https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=${process.env.API_KEY}`;
    // bodyFormData.append('images', req.body);
    console.log('made it here 2');
    axios({
      method: 'post',
      url: url,
      data: req.body,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
        console.log(response.data);
        const data = parseFloraData(response.data);
        res.send(data);
    })
    .catch(error => {
        console.error(error);
        res.send({message : 'Species not found.'});
    });
    console.log('made it here 4');
});

router.get('/imageTest', (req, res) => {
    const imageName = 'dandy-image';
    const file = fs.createReadStream(path.join(__dirname, `public/${imageName}.jpeg`));
    const bodyFormData = new FormData();
    const url = `https://my-api.plantnet.org/v2/identify/all?include-related-images=false&no-reject=false&lang=en&api-key=${process.env.API_KEY}`;
    bodyFormData.append('images', file);
    axios({
      method: 'post',
      url: url,
      data: bodyFormData,
      headers: {'Content-Type': 'multipart/form-data' }
    })
    .then(response => {
        console.log(response.data);
        const data = parseFloraData(response.data);
        res.send(data);
    })
    .catch(error => {
        console.error(error);
        res.send({message : 'Species not found.'});
    });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const axios = require('axios');

const FormData = require('form-data');
const fs = require('fs');
const path = require('path');

const { parseFloraData } = require('../service/parse');
const { upload, destPath } = require('../middleware/upload');



router.get('/', (req, res) => {
    res.send({message : 'Server'});
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

router.post('/image', upload.single('image'), (req, res) => {
    const imageName = req.file.originalname;
    const file = fs.createReadStream(path.join(__dirname, '..', `${destPath}${imageName}`));
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

router.get('/imageTest', (req, res) => {
    const imageName = 'Sunflower_sky_backdrop.jpeg';
    const file = fs.createReadStream(path.join(__dirname, '..', `public/${imageName}`));
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

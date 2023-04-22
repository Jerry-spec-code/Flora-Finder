const express = require('express');
const multer = require('multer');
const router = express.Router();
const axios = require('axios');
const upload = multer();

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
    const filePath = '';
    axios.post('http://localhost:5000/api/image', upload.single(filePath), (req, res) => {
            
    });
    res.send('Image sent successfully');
});

module.exports = router; 

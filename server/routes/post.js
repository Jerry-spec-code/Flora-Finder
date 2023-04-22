const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => {
    res.send({message : "This is a test"});
})

/*
{project : "all", images : [image1.jpeg], api-key: api}
*/
router.post('/image', (req, res) => {
    axios.post('https://my-api.plantnet.org/v2/identify/all', req.body)
    .then(response => {
        console.log(response.data);
        res.send(response.data);
    })
    .catch(error => {
        console.error(error);
    });
});

module.exports = router; 

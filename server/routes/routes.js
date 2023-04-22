const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => {
    res.send({message : "This is a test"});
})

module.exports = router; 

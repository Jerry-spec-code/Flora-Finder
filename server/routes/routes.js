const express = require('express');
const router = express.Router();

router.post('/test', (req, res) => {
    res.send("This is a test");
})

module.exports = router; 

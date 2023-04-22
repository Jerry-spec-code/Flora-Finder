const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require("./routes/routes");
const axios = require('axios');
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.get('/', (req, res) => {
  res.send("Server is running");
});

app.get('/test', (req, res) => {
   axios.post('http://localhost:5000/api/test')
  .then(res => {
    console.log(res.data);
  })
   .catch(error => {
     console.error(error);
   });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

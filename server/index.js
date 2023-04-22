const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const router = require('./routes/routes')
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api', router)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

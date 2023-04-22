const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const postRouter = require('./routes/post');
const getRouter = require('./routes/get')
const cors = require('cors');

require('dotenv').config();

app.use(express.json());
app.use(cors());
app.use('/api', postRouter);
app.use('', getRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

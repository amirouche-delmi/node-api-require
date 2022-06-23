const express = require('express');
const app = express();
require('./config/dbConfig');
const postsRoutes = require('./routes/postsRoutes')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.use('/api/posts', postsRoutes);

app.listen(5000, () => 
    console.log('Server running on port 5000')
);
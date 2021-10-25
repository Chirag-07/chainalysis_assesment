const express = require('express')
const coinbase = require('./routes/coinbase')
const kraken = require('./routes/kraken')
require('dotenv').config();

const app = express();


app.use('/coinbase', coinbase)
app.use('/kraken', kraken)


const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log(`Server running on port ${port}`))
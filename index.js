const express = require('express')
const coinbase = require('./routes/coinbase')
const kraken = require('./routes/kraken')
const path = require('path')
require('dotenv').config();

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});


app.use('/coinbase', coinbase)
app.use('/kraken', kraken)

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, './client/build', 'index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port, ()=>console.log(`Server running on port ${port}`))
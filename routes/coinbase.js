const axios = require('axios');
const express = require('express')

const router = express.Router();

router.get('/bitcoin-buy', async(req,res) =>{
    const bitcoinBuyData = await axios.get('https://api.coinbase.com/v2/prices/BTC-USD/buy')
    const bitcoinBuyPrice = bitcoinBuyData.data.data.amount;
    res.json(bitcoinBuyPrice);
});

router.get('/bitcoin-sell', async(req, res) => {
    const bitcoinSellData = await axios.get('https://api.coinbase.com/v2/prices/BTC-USD/sell')
    const bitcoinSellPrice = bitcoinSellData.data.data.amount;
    res.json(bitcoinSellPrice);
});

router.get('/ethereum-buy', async (req, res) => {
    const ethereumBuyData = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/buy')
    const ethereumBuyPrice = ethereumBuyData.data.data.amount;
    res.json(ethereumBuyPrice);
});

router.get('/ethereum-sell', async (req, res) => {
    const ethereumSellData = await axios.get('https://api.coinbase.com/v2/prices/ETH-USD/sell')
    const ethereumSellPrice = ethereumSellData.data.data.amount;
    res.json(ethereumSellPrice);
});


module.exports = router;
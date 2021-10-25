const axios = require('axios')
const express = require('express')
const router = express.Router();


const getCoinData = async (coinInfo) => {
    try{
        const response = await axios.get(`https://api.kraken.com/0/public/Ticker?pair=${coinInfo}`);
        return response.data.result;
    } catch(error){
        return error;
    }
};


router.get('/bitcoin-buy', async(req,res) => {
    const bitcoinData = await getCoinData('BTCUSD')
    const bitcoinBuyPrice = bitcoinData.XXBTZUSD.b[0];
    res.json(bitcoinBuyPrice);
});

router.get('/bitcoin-sell', async(req,res) =>{
    const bitcoinData = await getCoinData('BTCUSD')
    const bitcoinSellPrice = bitcoinData.XXBTZUSD.a[0];
    res.json(bitcoinSellPrice);
});

router.get('/ethereum-buy', async (req, res) => {
    const ethereumData = await getCoinData('ETHUSD')
    const ethereumSellPrice = ethereumData.XETHZUSD.b[0];
    res.json(ethereumSellPrice);
});

router.get('/ethereum-sell', async (req, res) => {
    const ethereumData = await getCoinData('ETHUSD')
    const ethereumSellPrice = ethereumData.XETHZUSD.a[0];
    res.json(ethereumSellPrice);
});


module.exports = router;
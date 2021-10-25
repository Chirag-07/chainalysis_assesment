const axios = require('axios')

const buyBitcoin = async() => {
    const data = await axios.get('/kraken/bitcoin-buy');
    return data.data
};

const sellBitcoin = async () => {
    const data = await axios.get('/kraken/bitcoin-sell');
    return data.data
};

const buyEthereum = async () => {
    const data = await axios.get('/kraken/ethereum-buy');
    return data.data
};

const sellEthereum = async () => {
    const data = await axios.get('/kraken/ethereum-sell');
    return data.data
};


const kraken = {
    buyBitcoin,
    sellBitcoin,
    buyEthereum,
    sellEthereum,
}

export default kraken;
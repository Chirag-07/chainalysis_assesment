const axios = require('axios')

const buyBitcoin = async () =>{
    const data = await axios.get('/coinbase/bitcoin-buy');
    return data
};

const sellBitcoin = async () => {
    const data = await axios.get('/coinbase/bitcoin-sell');
    return data
}

const buyEthereum = async () => {
    const data = await axios.get('/coinbase/ethereum-buy');
    return data
}

const sellEthereum = async () => {
    const data = await axios.get('/coinbase/ethereum-sell');
    return data
}

const coinbase = {
    buyBitcoin,
    sellBitcoin,
    buyEthereum,
    sellEthereum
};

export default coinbase
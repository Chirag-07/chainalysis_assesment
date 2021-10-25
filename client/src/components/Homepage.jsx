import React, { useEffect, useState } from 'react';
import coinbaseAPI from '../api/coinbase';
import krakenAPI from '../api/kraken';

import CoinbaseImg from '../assets/coinbase.png'
import KrakenImg from '../assets/kraken.png'
import BitcoinImg from '../assets/bitcoin.png'
import EthereumImg from '../assets/ethereum.png'


import { Container, Typography, Card, CardContent, CardMedia, Grid } from '@mui/material';
import { Divider } from '@material-ui/core'


const Homepage = () => {
    const [buyCoinbaseBitcoin, setBuyCoinbaseBitcoin] = useState();
    const [sellCoinbaseBitcoin, setSellCoinbaseBitcoin] = useState();
    const [buyCoinbaseEthereum, setBuyCoinbaseEthereum] = useState();
    const [sellCoinbaseEthereum, setSellCoinbaseEthereum] = useState();

    const [buyKrakenBitcoin, setBuyKrakenBitcoin] = useState();
    const [sellKrakenBitcoin, setSellKrakenBitcoin] = useState();
    const [buyKrakenEthereum, setBuyKrakenEthereum] = useState();
    const [sellKrakenEthereum, setSellKrakenEthereum] = useState();

    useEffect( () => {
        const getData = async() => {
        let buyCoinbaseBitcoinData = await coinbaseAPI.buyBitcoin();
        setBuyCoinbaseBitcoin(Number(buyCoinbaseBitcoinData.data).toFixed(2));

        let sellCoinbaseBitcoinData = await coinbaseAPI.sellBitcoin();
        setSellCoinbaseBitcoin(Number(sellCoinbaseBitcoinData.data).toFixed(2));

        let buyCoinbaseEthereumData = await coinbaseAPI.buyEthereum();
        setBuyCoinbaseEthereum(Number(buyCoinbaseEthereumData.data).toFixed(2));

        let sellCoinbaseEthereumData = await coinbaseAPI.sellEthereum();
        setSellCoinbaseEthereum(Number(sellCoinbaseEthereumData.data).toFixed(2));


        let buyKrakenBitcoinData = await krakenAPI.buyBitcoin();
        setBuyKrakenBitcoin(Number(buyKrakenBitcoinData).toFixed(2));

        let sellKrakenBitcoinData = await krakenAPI.sellBitcoin();
        setSellKrakenBitcoin(Number(sellKrakenBitcoinData).toFixed(2));

        let buyKrakenEthereumData = await krakenAPI.buyEthereum();
        setBuyKrakenEthereum(Number(buyKrakenEthereumData).toFixed(2));

        let sellKrakenEthereumData = await krakenAPI.sellEthereum();
        setSellKrakenEthereum(Number(sellKrakenEthereumData).toFixed(2));
        };
        getData();
    
    }, []);

    const recBuyBitcoin = buyCoinbaseBitcoin < buyKrakenBitcoin ? CoinbaseImg : KrakenImg;
    const recSellBitcoin = sellCoinbaseBitcoin > sellKrakenBitcoin ? CoinbaseImg : KrakenImg;
    const recBuyEthereum = buyCoinbaseEthereum < buyKrakenEthereum ? CoinbaseImg : KrakenImg;
    const recSellEthereum = sellCoinbaseEthereum > sellKrakenEthereum ? CoinbaseImg : KrakenImg;
    
    return (
        <>  
            <Container>
                <Typography variant="h2" className='title' style={{ fontWeight: 800 }} > AVAILABLE EXCHANGES </Typography>  
                <div className="imageContainer" style={{ marginTop: '2rem' }}> <img className='coinbaseImg' src={CoinbaseImg} height="70" alt="coinbase-logo"/> </div>
                <Grid container justifyContent='center'>
                    <Grid item className='priceGrid'>
                        <Card className='priceCard'>
                            <CardContent className="priceContent">
                                <Typography variant="h5"> <img className='logo' src={BitcoinImg} height="20" alt="bitcoin-logo"/> Buy Price: {buyCoinbaseBitcoin}</Typography>
                                <Typography variant="h5"> <img className='logo' src={BitcoinImg} height="20" alt="bitcoin-logo" /> Sell Price: {sellCoinbaseBitcoin}</Typography>
                            </CardContent>
                        </Card>
                        <Card className="priceCard">
                            <CardContent className="priceContent">
                                <Typography variant="h5"> <img className='logo' src={EthereumImg} height="25" alt="bitcoin-logo" /> Buy Price: {buyCoinbaseEthereum}</Typography>
                                <Typography variant="h5"> <img className='logo' src={EthereumImg} height="25" alt="bitcoin-logo" /> Sell Price: {sellCoinbaseEthereum}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <div className="imageContainer"> <img className='krakenImg' src={KrakenImg} height="110" alt="coinbase-logo" /> </div>
                <Grid container justifyContent='center'>
                    <Grid item className="priceGrid">
                        <Card className="priceCard">
                            <CardContent className="priceContent">
                                <Typography variant="h5"> <img className='logo' src={BitcoinImg} height="20" alt="bitcoin-logo" /> Buy Price: {buyKrakenBitcoin}</Typography>
                                <Typography variant="h5"> <img className='logo' src={BitcoinImg} height="20" alt="bitcoin-logo" /> Sell Price: {sellKrakenBitcoin}</Typography>
                            </CardContent>
                        </Card>
                        <Card className="priceCard">
                            <CardContent className="priceContent">
                                <Typography variant="h5"> <img className='logo' src={EthereumImg} height="25" alt="bitcoin-logo" /> Buy Price: {buyKrakenEthereum}</Typography>
                                <Typography variant="h5"> <img className='logo' src={EthereumImg} height="25" alt="bitcoin-logo" /> Sell Price: {sellKrakenEthereum}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Typography variant="h2" align='center' className='title' style={{ fontWeight: 800, marginTop: '5rem' }} > BEST EXCHANGE TO TRADE: </Typography>
                
                <div className='recGrid'>
                    <Card className='recCard'>
                        <CardContent className='priceContent'>
                            <Typography variant="h5" align='center'> Recommended Exchange to Buy Bitcoin: </Typography>
                            <img className='recImg' src={recBuyBitcoin} height="110" alt="recommended-exchange-logo" />
                        </CardContent>    
                        <Divider orientation='vertical' variant='middle' flexItem />
                        <CardMedia src={recBuyBitcoin} title='recommendedExchange' height="110" />
                        <CardContent className='priceContent'>
                            <Typography variant="h5" > Recommended Exchange to Sell Bitcoin: </Typography>
                            <img className='recImg' src={recSellBitcoin} height="110" alt="recommended-exchange-logo" />
                        </CardContent>
                    </Card>
                </div>
                <div className='recGrid'>
                    <Card className='recCard'>
                        <CardContent className='priceContent'>
                            <Typography variant="h5" > Recommended Exchange to Buy Ethereum: </Typography>
                            <img className='recImg' src={recBuyEthereum} height="110" alt="recommended-exchange-logo" />
                        </CardContent>
                        <Divider orientation='vertical' variant='middle' flexItem/>
                        <CardContent className='priceContent'>
                            <Typography variant="h5" > Recommended Exchange to Sell Ethereum: </Typography>
                            <img className='recImg' src={recSellEthereum} height="110" alt="recommended-exchange-logo" />
                        </CardContent>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default Homepage

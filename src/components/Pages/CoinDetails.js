import React from 'react';

const CoinDetails = () => (
  <div className="coin-container flex">
    <h1>Ethereum</h1>
    <p>eth</p>
    <img src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" alt="coin imgae" />
    <div>
      <h3>Relevant Stats</h3>
      <p>Hashing Algorithm: 4565</p>
      <p>Market Cap Rank: 3</p>
      <p>Total Volume: 23344533</p>
      <div>
        <h3>Daily Price</h3>
        <p>High 24: 23</p>
        <p>Low 24: 5</p>
      </div>
      <h3>Price Changes</h3>
      <div>
        <p>24h: 33</p>
        <p>7d: 33</p>
        <p>14d: 56</p>
      </div>
    </div>

  </div>

);

export default CoinDetails;

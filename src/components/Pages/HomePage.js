import React from 'react';
import { Link } from 'react-router-dom';
import CoinDetails from './CoinDetails';
import CoinCard from '../CoinCard';

const HomePage = () => {
  const arr = [
    {
      id: 1,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 2,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 3,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 4,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 5,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 6,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 7,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 8,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 9,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
    {
      id: 10,
      name: 'Bitcoin',
      ranking: 2,
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      currentPrice: '23453',
    },
  ];
  return (
    <div className="home-container flex">
      <input type="text" placeholder="Search For Your Favorite Coin..." className="search" />
      <div className="cards flex">
        {arr.map((coin) => (
          <Link className="links" to={`/coins/${coin.id}`} element={<CoinDetails arr={coin} />} key={coin.id}>
            <CoinCard arr={coin} />
          </Link>
        ))}
      </div>
    </div>

  );
};
export default HomePage;

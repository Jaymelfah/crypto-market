/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoinsFromApi } from '../../redux/allCryptoCoins/allCryptoCoins';
import CoinDetails from './CoinDetails';
import CoinCard from '../CoinCard';

const HomePage = () => {
  const [input, setInput] = useState('');
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinsFromApi());
  }, []);

  const filter = coins.filter((coin) => coin.name.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className="home-container flex">
      <input
        type="text"
        placeholder="Search For Your Favorite Coin..."
        className="search"
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="cards flex">
        {filter.map((coin) => (
          <Link className="links" to={`/coins/${coin.id}`} element={<CoinDetails arr={coin} />} key={coin.id}>
            <CoinCard coins={coin} />
          </Link>
        ))}
        {filter.length === 0 && <p>Oops...your coin is not in our database yet 😬</p>}
      </div>
    </div>

  );
};
export default HomePage;

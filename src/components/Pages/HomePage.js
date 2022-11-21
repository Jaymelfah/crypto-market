/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCoinsFromApi } from '../../redux/allCryptoCoins/allCryptoCoins';
import CoinDetails from './CoinDetails';
import CoinCard from '../CoinCard';

const HomePage = () => {
  const coins = useSelector((state) => state.coins);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoinsFromApi());
  }, []);

  return (
    <div className="home-container flex">
      <input type="text" placeholder="Search For Your Favorite Coin..." className="search" />
      <div className="cards flex">
        {coins.map((coin) => (
          <Link className="links" to={`/coins/${coin.id}`} element={<CoinDetails arr={coin} />} key={coin.id}>
            <CoinCard coins={coin} />
          </Link>
        ))}
      </div>
    </div>

  );
};
export default HomePage;

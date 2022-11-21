import React from 'react';
import PropTypes from 'prop-types';

const CoinCard = (props) => {
  const { arr } = props;

  return (

    <div className="coin-card flex">
      <h4>{arr.name}</h4>
      <img src={arr.image} alt={arr.name} />
      <p>
        Market Ranking:
        {' '}
        {arr.ranking}
      </p>
      <p>
        Current Price:
        {' '}
        $
        {' '}
        {arr.currentPrice}
      </p>
    </div>

  );
};

CoinCard.propTypes = {
  coins: PropTypes.array,
}.isRequired;

export default CoinCard;

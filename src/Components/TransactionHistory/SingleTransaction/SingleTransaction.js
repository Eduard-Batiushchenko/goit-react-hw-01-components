import React from 'react';
import PropTypes from 'prop-types';
import style from './SingleTransaction.module.css';

const SingleTransaction = ({ type, amount, currency }) => {
  return (
    <tr className={style.item}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

SingleTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default SingleTransaction;

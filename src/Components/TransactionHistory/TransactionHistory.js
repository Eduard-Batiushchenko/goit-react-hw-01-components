import React from 'react';
import SingleTransaction from './SingleTransaction/SingleTransaction';
import transactions from './transactions.json';
import style from './TransactionHistory.module.css';

const TransactionHistory = () => {
  return (
    <table className={style.transactionsTable}>
      <thead className={style.head}>
        <tr className={style.list}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return <SingleTransaction key={transaction.id} {...transaction} />;
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

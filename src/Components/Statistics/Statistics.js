import React from 'react';
import SingleStat from './SingleStat/SingleStat';
import statics from './statistical-data.json';
import style from './Statistics.module.css';

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className={style.title}>Upload stats</h2>
      <ul className={style.list}>
        {statics.map(stat => {
          return <SingleStat key={stat.id} {...stat} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;

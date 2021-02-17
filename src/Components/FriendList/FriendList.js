import React from 'react';
import FriendListItem from './FriendListItem/FriendListItem';
import friends from './friends.json';
import style from './FriendList.module.css';

const FriendList = () => {
  return (
    <ul className={style.list}>
      {friends.map(friend => {
        return <FriendListItem key={friend.id} {...friend} />;
      })}
    </ul>
  );
};

export default FriendList;

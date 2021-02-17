import React from 'react';
import Statistics from './Components/Statistics/Statistics';
import Profile from './Components/Profile/Profile';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Container from './Components/Container/Container';

function App() {
  return (
    <Container>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </Container>
  );
}

export default App;

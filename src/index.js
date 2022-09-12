import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
// import { Profile } from 'components/Profile/Profile';
// import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

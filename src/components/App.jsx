import user from 'components/Profile/user.json';
import { Profile } from 'components/Profile/Profile';
// import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <div
        style={{
          textAlign: 'center',
          padding: 30,
        }}
      >
        <h1 style={{
          fontSize: 30,
          color: '#010101',
        }}>React homework template</h1>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 30,
        }}
      >
      <Profile user={user} />
      {/* <Statistics />
      <FriendList />
      <TransactionHistory /> */}
      </div>
    </>
  );
};

console.log(user)
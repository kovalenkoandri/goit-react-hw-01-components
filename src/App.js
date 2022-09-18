import './App.css';
import Profile from 'components/Profile';
import user from 'components/Profile/user';
import data from 'components/Statistics/data';
import Statistics from 'components/Statistics';
import FriendList from 'components/FriendList';
import friends from 'components/FriendList/friends';
import transactions from 'components/TransactionHistory/transactions';
import TransactionHistory from 'components/TransactionHistory';
const {
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
} = user;
function App() {
  return (
    <>
       <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        followers={followers}
        views={views}
        likes={likes}
      />
      <Statistics title="Upload stats" stats={data} /> 
      <FriendList friends={friends} /> 
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user';
import Statistics from './components/Statistics/Statistics';
function App() {
  return [
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />,
    <Statistics
      title="Upload stats"
    />,
  ];
}

export default App;

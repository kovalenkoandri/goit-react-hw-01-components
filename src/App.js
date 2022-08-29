import './App.css';
import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user';
import Statistics from 'components/Statistics/Statistics';
const {
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
} = user;
function App() {
  return [
    <Profile
      username={username}
      tag={tag}
      location={location}
      avatar={avatar}
      followers={followers}
      views={views}
      likes={likes}
    />,
    <Statistics
      title="Upload stats"
    />,
  ];
}

export default App;

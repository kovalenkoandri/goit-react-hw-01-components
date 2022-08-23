import './App.css';
import Profile from './components/Profile/Profile';
import user from './components/Profile/user';
function App() {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

export default App;

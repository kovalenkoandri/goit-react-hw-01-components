import './App.css';
import Profile from './components/Profile';
import user from './user';
function App() {
  return (
    <Profile user={user} />
  );
}

export default App;

import './App.css';
import Nav from './components/Nav';
import { Favorites, SignupBirth, SignupName } from './components/Signup';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <SignupName /> */}
      {/* <SignupBirth /> */}
      <Favorites />
    </div>
  );
}

export default App;

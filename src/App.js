import './App.css';
import Nav from './components/Nav';
import { SignupBirth, SignupName } from './components/Signup';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <SignupName /> */}
      <SignupBirth />
    </div>
  );
}

export default App;

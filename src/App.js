import { Outlet, useNavigate } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import { Favorites, SignupBirth, SignupName } from './components/Signup';
import { useEffect, useState } from 'react';

function App() {
  let navigate = useNavigate();
  let [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!isLogin) navigate('/name');
  }, []);

  return (
    <div className="App">
      <Nav />
      <Outlet />
      {/* <SignupName /> */}
      {/* <SignupBirth /> */}
      {/* <Favorites /> */}
    </div>
  );
}

export default App;

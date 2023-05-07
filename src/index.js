import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './style/styled';
import { Favorites, ProfileSet, SignupBirth, SignupName } from './components/Signup';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './components/Landing';
import Home from './components/Home';

const basename = process.env.PUBLIC_URL;
const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'name',
        element: <SignupName />,
      },
      {
        path: 'birth',
        element: <SignupBirth />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'profile-set',
        element: <ProfileSet />,
      },
    ]
  },
  {
    path: '/landing',
    element: <Landing />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '',
        element: <h1>home main</h1>,
      },
      {
        path: 'recommend',
        element: <h1>recommendation</h1>,
      },
      {
        path: 'completed',
        element: <h1>completed</h1>,
      }
    ]
  }
]

const router = createBrowserRouter(routes, {basename: basename});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

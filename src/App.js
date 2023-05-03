import logo from './logo.svg';
import './App.css';
import './assets/styles/style.scss'
import Landing from './pages/landing/landing';
import Login from './pages/login/login';
import UserDetails from './pages/usetDetails/userDetails';
import Users from './pages/users/users';
import Notfound from './pages/notfound/notfound';
import { Routes } from 'react-router';
import { Route } from 'react-router';

function App() {
  return (
    <div>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/users' element={<Users/>}/>
      <Route path='/userDetails' element={<UserDetails/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
    </div>
  );
}

export default App;

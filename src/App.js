import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from './view/Home'
import Categories from './view/Categories';
import Products from './view/Products';
import Login from './view/Login';
import Profile from './view/Profile';
import Navbars from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbars />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<Products />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

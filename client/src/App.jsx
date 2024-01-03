import React from 'react'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Favorites from './Pages/Favorites'
import Order from './Pages/Order'
import Settings from './Pages/Settings'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Sidebar from './components/Sidebar'
import Account from './Pages/Account'
import Girls from './Pages/Girls'
import Watch from './Pages/Watch'
import Mens from './Pages/Mens'

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';


function App() {

return (
    <Router>
      <nav>
        <ul>
          <li>
            <NavLink to="/" >Home</NavLink>
          </li>

          <li>
            <NavLink to="/Cart">Cart</NavLink>
          </li>

          <li>
            <NavLink to="/Favorites" >Favorites</NavLink>
          </li>

          <li>
            <NavLink to="/Order" >Order</NavLink>
          </li>

          <li>
            <NavLink to="/Settings" >Settings</NavLink>
          </li>

          <li>
            <NavLink to="/Register" >Register</NavLink>
          </li>  


          <li>
            <NavLink to="/Login" >Login</NavLink>
          </li>
          <li>
            <NavLink to="/Account" >Login</NavLink>
          </li>
          <li>
            <NavLink to="/Girls" >Girls</NavLink>
          </li>
          <li>
            <NavLink to="/Watch" >Watch</NavLink>
          </li>
          <li>
            <NavLink to="/Mens" >Mens</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Order" element={<Order />} />
        <Route path="/Settings" Component={Settings } />
        <Route path="/Register" Component={Register } /> 
        <Route path="/Login" Component={Login } />
        <Route path="/Account" Component={Account } />
        <Route path="/Girls" Component={Girls } />
        <Route path="/Watch" element={<Watch /> } />
        <Route path="/Mens" Component={Mens } />
        
      </Routes>
      <Sidebar />

    </Router>
  );
}

export default App


import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
      
      {/*{code here}*/}
    <div className="navbar">
      <NavLink to="/">Home</NavLink> 
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </div>
};

export default NavBar;

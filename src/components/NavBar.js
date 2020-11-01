import React from 'react';
import { NavLink } from 'react-router-dom';

const navSection = {
  width: '100%',
  padding: '5px',
  margin: '10px',
  background: "grey",
  textDecoration: "none",
  color: 'blue',
}

const NavBar = () => {
  return (
    <div className="navbar">
     <NavLink to="/" exact style={navSection} activeStyle ={{background: "red"}}>
        Home
      </NavLink>

      <NavLink to="/movies" exact style={navSection} activeStyle ={{background: "pink"}}>
       Movies
      </NavLink>

      <NavLink to="/directors" exact style={navSection} activeStyle ={{background: "orange"}}>
       Directors
      </NavLink>

      <NavLink to="/actors" exact style={navSection} activeStyle ={{background: "grey"}}>
      Actors
      </NavLink>
    </div>
  );
};

export default NavBar;

import React from 'react';
import { NavLink } from 'react-router-dom';


const elementStyle = {
  margin: "2px",
  padding:"3px",
  color: "blue"
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={elementStyle} activeStyle={{background: "grey"}}>Home</NavLink>
      <NavLink to="/movies" style={elementStyle} exact activeStyle={{background: "grey"}}>Movies</NavLink>
      <NavLink to="/directors"  style={elementStyle} exact activeStyle={{background: "grey"}}>Directors</NavLink>
      <NavLink to="/actors" style={elementStyle} exact activeStyle={{background: "grey"}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;

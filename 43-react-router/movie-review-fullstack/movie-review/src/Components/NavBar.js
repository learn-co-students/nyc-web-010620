import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, NavLink } from "react-router-dom";


function NavBar(props) {
  return (
    <div className="nav-bar">
       <Link to="/movies"><img alt="flatiron tomatoes" src="tomatoes.png"/></Link>
        <div>
          <input placeholder="Search..."/>
          <Button color="default"><div>Submit</div></Button>
        </div>
        <Button color="default"><div><Link to="/login">Login</Link></div></Button>
        <Button color="default" ><div><Link to="/signup">Sign Up</Link></div></Button>
        <Button color="default">
          <div><span aria-label="person" role="img">👤</span></div>
        </Button>

    </div>
  );
}

export default NavBar;
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Components/style.module.css'

const Layout = ({ children }) => {
  return (
    
    <div className={classes.layout}>
      <nav className={classes.nav}>
        <Link className={classes.navlink} to="/"><img src="https://fontmeme.com/permalink/241212/81f84ef1e09768f25f78cd71977ab33c.png" alt="pokemon-font" border="0" width="120px" height="40px" padding-top="15px"/></Link>
        <Link className={classes.navlink} to="/team"><img src="https://fontmeme.com/permalink/241212/5416258ae43faee6265e2e871ae9a53c.png" alt="pokemon-font" border="0" width="120px" height="40px" padding-top="15px"/></Link>
      </nav>
      <div>
      {children}
      </div>
    </div>
  );
}

export default Layout;
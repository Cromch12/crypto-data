import React from 'react';
import { Link, NavLink } from 'react-router-dom';


function NavBar() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  
  return (
    <div>
     <div className={click ? "main-container" : ""} onClick={()=>Close()} />
      <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
        <div className="nav-container">
          <Link exact to="/" className="nav-logo">
            crypto.data
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/exchanges"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Exchanges
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/cryptocurrencies"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Cryptocurrencies
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/news"
                activeClassName="active"
                className="nav-links"
               onClick={click ? handleClick : null}
              >
                News
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}

export default NavBar;

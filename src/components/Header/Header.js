import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-newsclient" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">React News</a>
        </div>

        <div className="collapse navbar-collapse" id="navbar">
          <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Settings</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;

const React = require('react');
const { Link, IndexLink } = require('react-router');

const Navigation = () => 
   (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>
          <li>
            <IndexLink to="/" activeClassName="active-link">Timer</IndexLink>
          </li>
          <li>
            <Link to="/countdown" activeClassName="active-link">Countdown</Link>
          </li>
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li className="menu-text">
            CC <a href="http://localhost:3000" rel="noopener noreferrer" target="_blank"> CA</a>
          </li>
        </ul>
      </div>
    </div>
  );


module.exports = Navigation;

const React = require('react');

const { Link, IndexLink } = require('react-router');

const Nav = React.createClass({
    render() {
        return (
                  <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Timer App</li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
              Timer
              </IndexLink>
            </li>
            <li>
              <Link to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold' }}>
              CountDowns
              </Link>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li>
              C
              </li>
              <li>
              C
              </li>
            </ul>
          </form>
        </div>
      </div>);
    }

});

module.exports = Nav;


const React = require('react');
const Navigation = require('Navigation');

const Main = (props) => (
    <div>
    <Navigation />
      <div className="row">
        <div className="olumn small-centered medium-6 large-4">
          
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );


module.exports = Main;

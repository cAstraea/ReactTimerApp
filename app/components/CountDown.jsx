const React = require('react');
const Clock = require('Clock');

const CountDown = React.createClass({

    render() {
        return (<div>
        <Clock totalSeconds={129} />
        </div>
        );
    }

});

module.exports = CountDown;

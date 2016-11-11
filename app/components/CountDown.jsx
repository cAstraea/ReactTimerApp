const React = require('react');
const Clock = require('Clock');
const CountDownForm = require('CountDownForm');


const CountDown = React.createClass({
    getInitialState() {
        return { count: 0 };
    },

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds
        });
    },

    render() {
        const { count } = this.state;
        return (<div>
        <Clock totalSeconds={count} />
        <CountDownForm onSetCountDown={this.handleSetCountdown} />
        </div>
        );
    }

});

module.exports = CountDown;

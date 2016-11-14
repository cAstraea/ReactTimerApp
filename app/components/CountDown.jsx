const React = require('react');
const Clock = require('Clock');
const CountDownForm = require('CountDownForm');


const CountDown = React.createClass({
    getInitialState() {
        return { 
            count: 0,
            countdownStatus: 'stopped'
        };
    },

    componentDidUpdate(prevProps, prevState) {
            if (this.state.countdownStatus !== prevState.countdownStatus) {
                switch (this.state.countdownStatus) {
                    case 'started':
                    this.startTimer();
                    break;

                    default:
                    break;
                }
            }
    },
    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            const audio = new Audio('http://freewavesamples.com/files/Crash-Cymbal-1.wav');
            if (newCount === 0) {
                audio.play();
            }
            this.setState({
                count: newCount >= 0 ? newCount : 0
            });
        }, 1000);
    },

    handleSetCountdown(seconds) {
        this.setState({
            count: seconds,
            countdownStatus: 'started'
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

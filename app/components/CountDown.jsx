const React = require('react');
const Clock = require('Clock');
const CountDownForm = require('CountDownForm');
const Controls = require('Controls');

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

                    case 'stopped':
                       this.setState({ count: 0 });                                        
                     // fallsthrough
                    case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break;                 

                    default:
                    break;
                }
            }
    },
    componentWillUnmount() {
        clearInterval(this.timer);
        this.timer = undefined;
    },
    
    startTimer() {
        this.timer = setInterval(() => {
            const newCount = this.state.count - 1;
            const audio = new Audio('http://freewavesamples.com/files/Crash-Cymbal-1.wav');
            if (newCount === 0) {
                audio.play();
                this.setState({ countdownStatus: 'stopped' });
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
    handleStatusChange(newStatus) {
        this.setState({
            countdownStatus: newStatus
        });
    },
    render() {   
        const { count, countdownStatus } = this.state;
        const renderControlArea = () => {
            if (countdownStatus !== 'stopped') {
                return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />;
            } 
                  return <CountDownForm onSetCountDown={this.handleSetCountdown} />;            
        };
        return (<div>
        <h1 className="page-title"> CountDown App </h1>
        <Clock totalSeconds={count} />

        {renderControlArea()}

        </div>
        );
    }

});

module.exports = CountDown;

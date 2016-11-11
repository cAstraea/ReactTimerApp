const React = require('react');

const CountDownForm = React.createClass({
    onSubmit(e) {
        e.preventDefault();
        const strSeconds = this.refs.seconds.value;

    if (/^[0-9]+$/.test(strSeconds)) {
            this.refs.seconds.value = '';
            this.props.onSetCountDown(parseInt(strSeconds, 10));
        }
    },
    render() {
        return (
            <div>
            <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
            <input type="number" min="0" ref="seconds" placeholder="Enter time in seconds" />
            <button className="button expanded"> Start </button>
            </form>
            </div>

        );
    }

});

module.exports = CountDownForm;

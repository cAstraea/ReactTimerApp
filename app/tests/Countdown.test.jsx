const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const CountDown = require('CountDown');


describe('CountDown', () => {
    it('should exist', () => {
        expect(CountDown).toExist();
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown', () => {
            const countdown = TestUtils.renderIntoDocument(<CountDown />);
            countdown.handleSetCountdown(10);

            expect(countdown.state.count).toBe(10);
            expect(countdown.state.countdownStatus).toBe('started');

            setTimeout(() => {
                expect(countdown.state.count).toBe(5);
            }, 1001);
        });
    });
});

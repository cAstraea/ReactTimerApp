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
                expect(countdown.state.count).toBe(9);               
            }, 1001);
        });
    });

    describe('handleSetCountdown', () => {
        it('should set state to started and countdown doesn\'t go bellow 0', () => {
            const countdown = TestUtils.renderIntoDocument(<CountDown />);
            countdown.handleSetCountdown(1);          
            setTimeout(() => {
                expect(countdown.state.count).toBe(0);            
            }, 3001);
        });
    });

    describe('async test with mocha done', () => {
        let foo = false;
          before((done) => {
            setTimeout(() => {
                foo = true;
                done();
            }, 1001);
        });
        it('should fail without done', () => {
            expect(foo).toBe(true);
        });
    });
});

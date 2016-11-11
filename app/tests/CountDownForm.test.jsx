const expect = require('expect');
const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');

const CountDownForm = require('CountDownForm');

describe('CountDownForm', () => {
    it('should exist', () => {
        expect(CountDownForm).toExist();
    });

    it('should call onSetCountDown if valid seconds', () => {
        const spy = expect.createSpy();
        const countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy} />);
        const $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(109);
    });

    it('should not  onSetCountDown if invalid seconds', () => {
        const spy = expect.createSpy();
        const countdownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={spy} />);
        const $el = $(ReactDOM.findDOMNode(countdownForm));

        countdownForm.refs.seconds.value = '109asdf';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });

});

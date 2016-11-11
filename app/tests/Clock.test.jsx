const expect = require('expect');
const React = require('react');
const TestUtils = require('react-addons-test-utils');
const $ = require('jquery');
const Clock = require('Clock');

describe('Clock', () => {
    it('should exist', () => {
        expect(Clock).toExist();
    });
});

describe('Render', () => {
  it('should render clock', () => {
    const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);  
    const $el = $(clock.node);
    const actualText = $el.find('.clock-text').text();
    expect(actualText).toBe('01:02');
  });
});

describe('formatSeconds', () => {
  it('should format seconds', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 615;
      const expected = '10:15';
      const actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });

    it('should format seconds when /min/sec less than 10', () => {
      const clock = TestUtils.renderIntoDocument(<Clock />);
      const seconds = 61;
      const expected = '01:01';
      const actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });
});

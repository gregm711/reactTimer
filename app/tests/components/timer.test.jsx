var expect = require('expect');
var ReactDOM = require('react-dom');
var React = require('react');
var TestUtils  = require('react-addons-test-utils');
var $ = require('jQuery');


var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });


    // describe('handleSetCountdown',  () => {
    //     it('should set state to started and countdown',  (done) =>{
    //         var timer = TestUtils.renderIntoDocument(<Timer/>);
    //         timer.handleSetTimer(10);
    //         expect(timer.state.count).toBe(10);
    //         expect(timer.state.timerStatus).toBe('started');
    //
    //         setTimeout(() => {
    //             expect(timer.state.count).toBe(9);
    //             done();
    //         }, 1001)
    //
    //     });
    //     it('should never set count less than 0 ', (done) => {
    //         var timer = TestUtils.renderIntoDocument(<Timer/>);
    //         timer.handleSetTimer(2);
    //         setTimeout(() => {
    //             expect(timer.state.count).toBe(0);
    //             done();
    //         }, 3001)
    //
    //     });
    //
    //     it ('should pause countdown on paused status', (done) => {
    //         var timer = TestUtils.renderIntoDocument(<Timer/>);
    //         timer.handleSetTimer(3);
    //         timer.handleStatusChange('paused');
    //
    //         setTimeout(() => {
    //             expect(timer.state.count).toBe(3);
    //             expect(timer.state.timerStatus).toBe('paused');
    //             done();
    //         }, 1001);
    //     });
    //
    //     it('should stop countown on stopped status', (done) => {
    //         var timer = TestUtils.renderIntoDocument(<Timer/>);
    //         timer.handleSetTimer(3);
    //         timer.handleStatusChange('stopped');
    //         setTimeout(() => {
    //             expect(timer.state.count).toBe(0);
    //             expect(timer.state.timerStatus).toBe('stopped');
    //             done();
    //         }, 1001);
    //     });
    // });


});
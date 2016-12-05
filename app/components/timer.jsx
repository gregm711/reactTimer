var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer  = React.createClass({
    getInitialState: function() {
        return {
            count: 0,
            timerStatus: 'stopped'
        };
    },

    componentDidUpdate: function(prevProps, prevState) {
        if (this.state.timerStatus !== prevState.timerStatus) {
            switch (this.state.timerStatus) {
                case 'started':
                    this.startTimer();
                    break;
                case 'stopped':
                    this.setState({count: 0});
                case 'paused':
                    clearInterval(this.timer);
                    this.timer = undefined;
                    break
            }


        }
    },

    startTimer: function () {
        console.log('timer started');
        this.timer = setInterval(() =>{
            var newCount = this.state.count + 1;
            this.setState({

                count: newCount >= 0 ? newCount : 0
            });
            if (newCount === 0) {
                this.setState({timerStatus: 'stopped'});
            }
        }, 1000);
    },


    handleStatusChange: function (newStatus) {
        console.log('staus changes', newStatus, this.state.count);
        this.setState({timerStatus: newStatus});

    },


    render: function() {

        var {count, timerStatus} = this.state;

        var renderControlArea = () => {
                return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>

        };

        return (
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                {renderControlArea()}
            </div>

        );
    }
});
module.exports = Timer;
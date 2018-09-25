import React, { Component } from 'react'

class StopWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
            isRunning: false
        }

        this.handlePause = this.handlePause.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.getFormattedTime = this.getFormattedTime.bind(this)
    }

    componentDidMount(){
        this.timer = setInterval(() => {
            if(this.state.isRunning){
                this.setState({
                    time: this.state.time + 1,
                    isRunning: true
                })
            }
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    handlePause(event){
        if(this.state.isRunning) {
            this.setState({
                isRunning: false
            })
        }else{
            this.setState({
                isRunning: true
            })
        }
    }


    handleReset(event){
        this.setState({
            time: 0,
            isRunning: false
        })
    }

    getFormattedTime(){
        var min = this.formatInteger(parseInt(this.state.time/60))
        var sec = this.formatInteger(parseInt(this.state.time%60))

        return `${min}:${sec}`
    }

    formatInteger(n){
        if(n<=9){
            return `0${n}`
        }else{
            return n
        }
    }

    
    render() { 
        return ( <div>
            <h1>{this.getFormattedTime()}</h1>
            <button onClick={this.handlePause}>{this.state.isRunning ? 'Pause' : 'Start'}</button><button onClick={this.handleReset} disabled= {this.state.time == 0}>Reset</button>
        </div> );
    }
}
 
export default StopWatch;
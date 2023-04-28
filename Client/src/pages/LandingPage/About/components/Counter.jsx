import React from 'react'

class Counter extends React.Component{
    state = {
        counter: 0
    }
    increment = () => {
        this.setState({
            counter: this.state.counter+1
        })
    }
    render() {
        return (
            <div className=' text-2xl p-3 text-center'>
                <p> {this.state.counter}</p>
                <button className='p-3 bg-tblue' onClick={this.increment}>Increment</button>
            </div>
        )
    }
};
export default Counter;
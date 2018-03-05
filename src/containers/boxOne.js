import React from 'react';

class BoxOne extends React.Component {

    constructor(props) {
        super(props)
        this.state = {toggle: true}
        this.eventHandler = this.eventHandler.bind(this)
    }

    eventHandler(event) {
        console.log(event)
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }),
        
        
        );
        console.log(this.state)
        this.passClickToParent(this.state.toggle)
    }

    passClickToParent = (event) => {
        this.props.callBackFromParent(event)
    } 

    render() {
        return (
            <div className="box box-normal-with-hover-transition"
                onClick={this.props.action} >
                <h1 >C.V.</h1>
                <h2>C.V.</h2>

            </div>
        )
    }
}

export default BoxOne;
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
            <div  className="box-one draw-corner"
                onClick={this.props.action} >
                <h1 className="hero-text">C.V.</h1>
            </div>
        )
    }
}

export default BoxOne;
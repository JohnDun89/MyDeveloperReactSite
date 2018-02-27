import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'
import Cv from './cv.js'
import WebGl from './webGl.js'
import Animation from './animation.js'
import Tilt from 'react-tilt'
import Github from './github.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class BoxContainer extends React.Component {
    constructor(props){
        super(props) 

        this.state = {

            BoxOne: true,
            BoxTwo: true,
            BoxThree: true,
            BoxFour: true
        }

        this.toggleBoxOneState = this.toggleBoxOneState.bind(this)
        this.toggleBoxTwoState = this.toggleBoxTwoState.bind(this)
        this.toggleBoxThreeState = this.toggleBoxThreeState.bind(this)
        this.toggleBoxFourState = this.toggleBoxFourState.bind(this)
    }

    renderToggle(Component1, Component2, StateBoolean, toggleFunction) {
        console.log(Component1,Component2, StateBoolean, toggleFunction)
        if (StateBoolean === true) {
            return (
                <Tilt className="tilt" options={{ max: 10, speed: 1000, scale: 1, tansition: true }}>
                    <div >
                        <ReactCSSTransitionGroup
                            transitionName="main-react-transition"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionLeaveTimeout={1000}
                            transitionEnterTimeout={1000}>
                        <Component1 action={toggleFunction} />
                        </ReactCSSTransitionGroup>
                    </div>
                </Tilt>
            )
        } else {
            return (
                <div >
                    <ReactCSSTransitionGroup
                        transitionName="main-react-transition"
                        transitionAppear={true}
                        transitionAppearTimeout={1000}
                        transitionLeaveTimeout={1000}
                        transitionEnterTimeout={1000}>
                    <Component2 close={toggleFunction || StateBoolean} />
                    </ReactCSSTransitionGroup>
                </div>
            )
        }
    }

    toggleBoxOneState() {
        this.setState({ BoxOne: !this.state.BoxOne })
    }

    toggleBoxTwoState() {
        this.setState({ BoxTwo: !this.state.BoxTwo })
    }

    toggleBoxThreeState() {
        this.setState({ BoxThree: !this.state.BoxThree })
    }

    toggleBoxFourState() {
        this.setState({ BoxFour: !this.state.BoxFour })
    }

    render() {
        return (
            
            <div className="flex-parent-main">  
            {this.renderToggle(BoxOne, Cv, this.state.BoxOne, this.toggleBoxOneState)} 
            {this.renderToggle(BoxTwo, WebGl, this.state.BoxTwo, this.toggleBoxTwoState)}
            {this.renderToggle(BoxThree, Animation, this.state.BoxThree, this.toggleBoxThreeState)}  
            {this.renderToggle(BoxFour, Github, this.state.BoxFour, this.toggleBoxFourState)}     
            
            </div>
        )
    }

}

export default BoxContainer;
import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'
import BoxFive from './boxFive.js'
import BoxSix from './boxSix.js'
import Cv from './cv.js'
import WebGl from './webGl.js'
import Animation from './animation.js'
import Tilt from 'react-tilt'
import Github from './github.js'
import Code from './code.js'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class BoxContainer extends React.Component {
    constructor(props){
        super(props) 

        this.state = {
            BoxOne: true,
            BoxTwo: true,
            BoxThree: true,
            BoxFour: true,
            BoxFive: true
        }

        this.toggleBoxOneState = this.toggleBoxOneState.bind(this)
        this.toggleBoxTwoState = this.toggleBoxTwoState.bind(this)
        this.toggleBoxThreeState = this.toggleBoxThreeState.bind(this)
        this.toggleBoxFourState = this.toggleBoxFourState.bind(this)
        this.toggleBoxFiveState = this.toggleBoxFiveState.bind(this)
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

    toggleBoxFiveState() {
        this.setState({ BoxFive: !this.state.BoxFive })
    }

    transition (Component, callback, boolean) {
 return (
           <ReactCSSTransitionGroup
               transitionName="main-react-transition"
               transitionAppear={true}
               transitionAppearTimeout={1000}
               transitionLeaveTimeout={1000}
               transitionEnterTimeout={1000}>
               <Component action={callback} />
           </ReactCSSTransitionGroup>
            )
       }

    



    renderToggle(Component1, Component2, StateBoolean, toggleFunction, transition) {
        if (StateBoolean === true) {
            return (
                <Tilt className="tilt" options={{ max: 10, speed: 1000, scale: 1, tansition: true}}>
                    <div >
                        {transition(Component1, toggleFunction)} 
                    </div>
                </Tilt>
             )
        }
         if (StateBoolean === false){
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

    //   



    render() {
        return (
            
            <div className="flex-parent-main">  
            {this.renderToggle(BoxOne, Cv, this.state.BoxOne, this.toggleBoxOneState, this.transition)} 
            {this.renderToggle(BoxTwo, WebGl, this.state.BoxTwo, this.toggleBoxTwoState, this.transition)}
            {this.renderToggle(BoxThree, Animation, this.state.BoxThree, this.toggleBoxThreeState, this.transition)}  
            {this.renderToggle(BoxFour, Github, this.state.BoxFour, this.toggleBoxFourState, this.transition)}     
            {this.renderToggle(BoxFive, Code, this.state.BoxFive, this.toggleBoxFiveState, this.transition)}
            </div>
        )
    }

}

export default BoxContainer;
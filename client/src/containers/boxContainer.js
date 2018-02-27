import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'
import Cv from './cv.js'
import WebGl from './webGl.js'
import LinksToTwitterAndGit from './linksToTwitterAndGit.js'
import Tilt from 'react-tilt'


class BoxContainer extends React.Component {
    constructor(props){
        super(props) 

        this.state = {

            BoxOne: true,
            BoxTwo: true,
            BoxThree: true
        }

        this.toggleBoxOneState = this.toggleBoxOneState.bind(this)
        this.toggleBoxTwoState = this.toggleBoxTwoState.bind(this)
        this.toggleBoxThreeState = this.toggleBoxThreeState.bind(this)
    }

    renderToggle(Component1, Component2, StateBoolean, toggleFunction) {
        console.log(Component1,Component2, StateBoolean, toggleFunction)
        if (StateBoolean === true) {
            return (
                <Tilt className="tilt" options={{ max: 10, speed: 1000, scale: 1, tansition: true }}>
                    <div >
                        <Component1 action={toggleFunction} />
                    </div>
                </Tilt>
            )
        } else {
            return (
                <div >
                    <Component2 close={toggleFunction || StateBoolean} />
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

    render() {
        return (
            
            <div className="flex-parent-main">  
            {this.renderToggle(BoxOne, Cv, this.state.BoxOne, this.toggleBoxOneState)} 
            {this.renderToggle(BoxTwo, WebGl, this.state.BoxTwo, this.toggleBoxTwoState)}
            {this.renderToggle(BoxThree,LinksToTwitterAndGit, this.state.BoxThree, this.toggleBoxThreeState)}       
            <BoxFour />
            </div>
        )
    }

}

export default BoxContainer;
import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'
import Cv from './cv.js'
import WebGl from './webGl.js'
import LinksToTwitterAndGit from './linksToTwitterAndGit.js'


class BoxContainer extends React.Component {
    constructor(props){
        super(props) 

        this.state = {

            BoxOne: true,
            BoxTwo: true,
            BoxThree: true
        }
        this.childToParent = this.childToParent.bind(this)
        this.closeClickedOnCv = this.closeClickedOnCv.bind(this)
        this.toggleBoxTwo = this.toggleBoxTwo.bind(this)
        this.toggleBoxThree = this.toggleBoxThree.bind(this)
    }
// ----------------------------------------------------- Box One --------------------------// 
//   the code here is longer than the other boxes as it allows data to be passed from child to parent.
    childToParent(event) {   
        if (event === true ) {
            console.log(event)  
            this.setState({BoxOne: false})
            this.expandBoxOne()
        } 
    }

    closeClickedOnCv(){
        this.setState({BoxOne: true})
    }

    expandBoxOne() {
        return (
        <div>
            <Cv  action={this.closeClickedOnCv}/>
        </div>
        )
    }

    renderBoxOne () {
        if (this.state.BoxOne === true) {
           return (
               <div className="box">
                   <BoxOne callBackFromParent={this.childToParent} /> 
               </div>
           )
        } else{
            return (
                <div>
                    {this.expandBoxOne()} 
                </div>
            );
        }
    }

    // ----------------------------------------------------- Box Two --------------------------// 

    renderBoxTwo () {
        if (this.state.BoxTwo === true) {
            return (
                <div className="box">
                    <BoxTwo actionBoxTwo={this.toggleBoxTwo} />
                </div>
            )
        } else {
            return (
                <div >
                    <WebGl webGlAction={this.toggleBoxTwo || this.state.BoxTwo} />
                </div>
            )
        }
    }

    toggleBoxTwo () {
       this.setState({BoxTwo: !this.state.BoxTwo})
    }





        // ----------------------------------------------------- Box Three --------------------------// 

    renderBoxThree() {
        if (this.state.BoxThree === true) {
            return (
                <div className="box">
                    <BoxThree actionBoxThree={this.toggleBoxThree} />
                </div>
            )
        } else {
            return (
                <div >
                    < LinksToTwitterAndGit action={this.toggleBoxThree} />
                </div>
            )
        }
    }

    toggleBoxThree() {
        this.setState({ BoxThree: !this.state.BoxThree })
    }
        // ----------------------------------------------------- Box Four --------------------------// 


        // ----------------------------------------------------- Main Container Render --------------------------// 


    render() {
        return (
            
            <div className="flex-parent-main">  
            {this.renderBoxOne()} 
            {this.renderBoxTwo() || this.toggleBoxTwo()}   
            {this.renderBoxThree() || this.toggleBoxThree()}              
            
           
            <BoxFour />
            </div>
        )
    }

}

export default BoxContainer;
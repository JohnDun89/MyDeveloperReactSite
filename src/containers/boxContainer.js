import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'
import Cv from './cv.js'
import WebGl from './webGl.js'


class BoxContainer extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            BoxOne: true,
            BoxTwo: true
        }
        this.childToParent = this.childToParent.bind(this)
        this.closeClickedOnCv = this.closeClickedOnCv.bind(this)
        this.toggleBoxTwo = this.toggleBoxTwo.bind(this)
    }
// ----------------------------------------------------- Box One --------------------------// 
//   the code here is longer than the other boxs as it allows data to be passed from child to parent.
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
               <div>
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
                <div>
                    <BoxTwo actionBoxTwo={this.toggleBoxTwo} />
                </div>
            )
        } else {
            return (
                <div>
                    <WebGl webGlAction={this.toggleBoxTwo} />
                </div>
            )
        }
    }

    toggleBoxTwo () {
       this.setState({BoxTwo: !this.state.BoxTwo})
    }

        // ----------------------------------------------------- Box Three --------------------------// 

        // ----------------------------------------------------- Box Four --------------------------// 


        // ----------------------------------------------------- Main Container Render --------------------------// 


    render() {
        return (
            <div id="flex-parent-main">          
            {this.renderBoxOne()} 
            {this.renderBoxTwo() || this.toggleBoxTwo()}                 
            
            <BoxThree />
            <BoxFour />
            </div>
        )
    }

}

export default BoxContainer;
import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'

class BoxContainer extends React.Component {
    constructor(props){
        super(props) 
        this.state = {toggleBoxes: true}
        this.childToParent = this.childToParent.bind(this)
    }

    childToParent(event) {   
        if (event === true ) {
            console.log(event)  
            //I will have a toggoel for each box
            this.setState({toggleBoxes: false})
            this.expandBoxOne()
        }    
    }

    expandBoxOne() {
        //here I will reuturn my cv componenet
        return (<div></div>)
    }

    componentDidMount(){  
    }



    renderAlternative () {
        if (this.state.toggleBoxes) {
           return (
               <div>
                   <BoxOne callBackFromParent={this.childToParent} />

               </div>
           )
        } else{
            return null;
        }
    }

    render() {
        return (
            <div id="flex-parent-main">          
            {this.renderAlternative()}                      
            <BoxTwo />
            <BoxThree />
            <BoxFour />
            </div>
        )
    }

}

export default BoxContainer;
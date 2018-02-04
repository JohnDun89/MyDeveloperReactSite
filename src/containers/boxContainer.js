import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'

class BoxContainer extends React.Component {
    constructor(props){
        super(props) 
        this.state = {toggleBoxes: true}
    }


    childToParent(dataFromBox) {
        console.log(dataFromBox)
        console.log('hit')
    }

    togglecontent() {
        this.setState({
            toggleBoxes: !this.state.toggleBoxes
        })
    }


    // would swap the renders here. 
    renderAlternativeOne () {
        if (this.state.toggleBoxes) {
           return (
               <div>
                   <BoxOne callBackFromParent={this.childToParent} />
               <BoxTwo />
               </div>
           )
        } else{
            return null;
        }
    }

    render() {
        return (
            <div id="flex-parent-main">          
            {this.renderAlternativeOne()}                      
                    <BoxThree />
                    <BoxFour />
            </div>
        )
    }

}

export default BoxContainer;
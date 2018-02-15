import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'

class BoxContainer extends React.Component {
    constructor(props){
        super(props) 
        this.state = {toggleBoxes: true}
        // this.togglecontent = this.togglecontent(this)
        this.childToParent = this.childToParent.bind(this)
    }

    childToParent(event) {   
        if (event === true ) {
            console.log(event)  
            this.setState({toggleBoxes: false})
        }    
    }

    componentDidMount(){

        
    }



    renderAlternative () {
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
            {this.renderAlternative()}                      
                    <BoxThree />
                    <BoxFour />
            </div>
        )
    }

}

export default BoxContainer;
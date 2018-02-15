import React from 'react';
import BoxOne from './boxOne.js'
import BoxTwo from './boxTwo.js'
import BoxThree from './boxThree.js'
import BoxFour from './boxFour.js'
import Cv from './cv.js'


class BoxContainer extends React.Component {
    constructor(props){
        super(props) 
        this.state = {toggleBoxes: true}
        this.childToParent = this.childToParent.bind(this)
        this.closeClickedOnCv = this.closeClickedOnCv.bind(this)
    }

    childToParent(event) {   
        if (event === true ) {
            console.log(event)  
            //I will have a toggoel for each box
            this.setState({toggleBoxes: false})
            this.expandBoxOne()
        } 
       
    
    }

    closeClickedOnCv(){
        this.setState({toggleBoxes: true})
    }

    expandBoxOne() {
        //here I will reuturn my cv componenet
        return (
        <div>
            <Cv  action={this.closeClickedOnCv}/>
        </div>
        )
    }

    componentDidMount(){  
    }



    renderAlternative () {
        if (this.state.toggleBoxes === true) {
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
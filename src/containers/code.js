import React from 'react';

class Code extends React.Component {


    render() {

      
        return (
            <div className="expanded-box">
                
                <button id="code-picture" className="back-button" alt="example of react js code."onClick={this.props.close} type="button" >Close</button>
                <div className="expanded-box-flex">
                <img src="./assets/componentToggler.png" />
                <p>Here, I created a dynamic function to toggle the main components on this site. It accepts the components that are <br/>to be switched between, a state Boolean of the component, a callback and a transition that can be applied. </p>
                </div>
            </div>
        )
    }
}

export default Code;
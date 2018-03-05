import React from 'react';

class Code extends React.Component {


    render() {

      
        return (
            <div className="box">
                <button className="back-button" alt="example of react js code."onClick={this.props.close} type="button" >Close</button>
                <img i src="./assets/Component-Toggler.png" />

            <div >
                <p>Here I created a dynamic function to toggle the main components. It accepts the components that are <br/>to be switched between, a state Boolean of the component, a callback and a tranistion that can be applied. </p>
            </div>
            </div>
        )
    }
}

export default Code;
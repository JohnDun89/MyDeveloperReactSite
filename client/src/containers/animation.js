
import React from 'react';
import BackButton from './backButton.js'
import Tilt from 'react-tilt'

class Animation extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="expanded-content">
                <div className="button-container">
                    <button className="back-button" onClick={this.props.close} type="button" >Close</button>
                </div>
                <div id="animation-container">
                    <img id="image-castle" className="image" src="./assets/background-01.png" />
                    <img id="image-back" className="image" src="./assets/MidGround-01.png"/>
                    <img id="image-mid" className="image" src="./assets/FrontMidground-01.png" />
                    <img id="image-front" className="image" src="./assets/ForeGround-01.png" />                 
                </div>
               
                <p>This will contain links to my twitter and git hub</p>

            </div>

        )
    }

}

export default Animation;
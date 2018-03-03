
import React from 'react';
import BackButton from './backButton.js'
import Tilt from 'react-tilt'
import $ from 'jquery'; 

class Animation extends React.Component {

    constructor(props) {
        super(props)

        this.state = { x: 0, y: 0 };
    }

    _onMouseMove(e) {
        const position = 
        
        console.log(position, e.nativeEvent.offsetX, e.screenX);

        this.setState({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    }



    render() {
 
            let amountDetected = this.state.x;
            let returnValue = amountDetected / 10;
            console.log(returnValue);
            
        
        const { x, y } = this.state;
       
        return (
            <div className="expanded-content" ref="elem">
                <div className="button-container">
                    <button className="back-button" onClick={this.props.close} type="button" >Close</button>
                </div>
                <div id="animation-container" onMouseMove={this._onMouseMove.bind(this)}>
                    <img id="image-castle" className="image" src="./assets/background-01.png"  />
                    <img id="image-back" className="image" src="./assets/MidGround-01.png"/>
                    <img id="image-mid" className="image" src="./assets/FrontMidground-01.png" />
                    <img id="image-front" className="image" src="./assets/ForeGround-01.png" />  

                </div>      
                <p>This will contain links to my twitter and git hub</p>
                <h1>Mouse coordinates: {x} {y} {returnValue}</h1>
            </div>

        )
    }
    
}
export default Animation;
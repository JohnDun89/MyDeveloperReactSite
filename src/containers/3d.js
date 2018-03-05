import React from 'react';

class ThreeD extends React.Component {


    render() {


        return (
            <div className="expanded-box">

                <button onClick={this.props.close} type="button" className="back-button">Close</button>
                <div className="expanded-box-flex">
                    <img src="./assets/whiskyWeb.jpg" />
                    <p>Currently working on animating this and creating glass materials in WebGL</p>
                </div>
            </div>
        )
    }
}

export default ThreeD;
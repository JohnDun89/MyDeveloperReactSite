import React from 'react';

class WebGl extends React.Component {

    constructor(props) {
        super(props)
    }

    backButtonPressed() {
        console.log('back button web gl')
    }

    render() {
        return (
            <div className="expanded-content">
                <div className="button-container">
                    <button className="back-button" onClick={this.props.webGlAction} type="button" >Close</button>
                </div>
              <p>Web Gl content</p>

            </div>
        )
    }
}

export default WebGl;
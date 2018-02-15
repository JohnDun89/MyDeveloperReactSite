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
                    <button className="back-button" onClick={this.props.action} type="button" >Close</button>
                </div>
              <p></p>

            </div>
        )
    }
}

export default WebGl;
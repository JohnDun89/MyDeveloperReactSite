import React from 'react';

class Code extends React.Component {


    render() {

      
        return (
            <div className="expanded-content-links">
                <button className="back-button" onClick={this.props.close} type="button" >Close</button>
                <img i src="./assets/Component-Toggler.png" />

            <div >
                Im a code snippet.
            </div>
            </div>
        )
    }
}

export default Code;
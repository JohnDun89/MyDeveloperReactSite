import React from 'react';

class BackButton extends React.Component {

    render() {
        return (
            <div >
                <button className="back-button" onClick={this.props.action} type="button" >Close</button>
            </div>
        )
    }

}

export default BackButton;
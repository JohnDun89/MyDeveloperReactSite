import React from 'react';

class BackButton extends React.Component {

    backButton() {
        console.log('clicked')
    }


    render() {
        return (
            <div >
                <button className="back-button" onClick={this.backButton} type="button" >Close</button>
            </div>
        )
    }

}

export default BackButton;
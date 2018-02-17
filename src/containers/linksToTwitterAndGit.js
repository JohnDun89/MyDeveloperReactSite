
import React from 'react';
import BackButton from './backButton.js'

class LinksToTwitterAndGit extends React.Component {

    constructor(props) {
        super(props)
    }



    backButtonPressed() {
        console.log('back button ')
    }

    render() {
        return (


            <div className="expanded-content">
                <div className="button-container">
                    <button className="back-button" onClick={this.props.action} type="button" >Close</button>
                </div>
               
                <p>This will contain links to my twitter and git hub</p>

            </div>

        )
    }

}

export default LinksToTwitterAndGit;
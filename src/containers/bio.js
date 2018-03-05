import React from 'react';

class Bio extends React.Component {


    render() {

        console.log(this.props.mainTitle)

        return (
            <div id="bio">
                <div id="contact details">
               
                <h1>john@johnduncanphoto.com</h1>
                </div>
                <div>
                </div>

            </div>
        )
    }
}

export default Bio;
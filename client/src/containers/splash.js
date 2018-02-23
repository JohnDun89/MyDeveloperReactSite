import React from 'react';

class Splash extends React.Component {


    render() {

        console.log(this.props.mainTitle)


        const title = this.props.mainTitle

        return (
            <div id="splash-box" onClick={this.props.splashClicked}>
                <h1>
                   Splash me up
                </h1>
            </div>
        )
    }
}

export default Splash;
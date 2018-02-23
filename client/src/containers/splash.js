import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Splash extends React.Component {

    componentWillMount() {

    }

    render() { 
        return (
            <div id="splash-box" onClick={this.props.splashClicked}>
                <div>

                        <h1 Animated class="animated fadeInUp " id="name-animation">
                            John Duncan
                </h1>
                </div>
                <div>
                    {/* to use this the item must have a key .  */}
                    <ReactCSSTransitionGroup
                        transitionName="job"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                        <h2 >Full stack Developer. </h2>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Splash;
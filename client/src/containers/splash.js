import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Splash extends React.Component {


    render() { 
        const description = this.props.introText.map((number) => 
            <h2 key={number.toString()} class="animated fadeInUp " id="name-animation">
        {number}
        </h2>
        );
        return (
            <div id="splash-box"  onWheel={this.props.splashClicked}>
                <div>
                    {/* to use this the item must have a key .  */}
                    <ReactCSSTransitionGroup
                        transitionName="introduction"
                        transitionAppear={true}
                        transitionAppearTimeout={1500}
                        transitionEnter={false}
                        transitionLeave={false}>
                        
                       {description}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Splash;
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Splash extends React.Component {

    componentWillMount() {

    }

    render() { 
        const description = this.props.introText.map((number) => 
    <h2 key={number.toString()}>
        {number}
        </h2>
        );
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
                        transitionName="introduction"
                        transitionAppear={true}
                        transitionAppearTimeout={500}
                        transitionEnter={false}
                        transitionLeave={false}>
                        <h1>hello</h1>
                       {description}
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}

export default Splash;
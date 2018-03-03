import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class BoxThree extends React.Component {


    render() {
        return (
            <div className="box-normal-with-hover-transition">
            <div 
                onClick={this.props.action}>
                <h1 id="animation-title">Animation </h1>
                
            </div>
            </div>
        )
    }
}

export default BoxThree;
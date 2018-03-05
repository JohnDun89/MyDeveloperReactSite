import React from 'react';

class BoxThree extends React.Component {


    render() {
        return (
            <div className="box">
            <div 
                onClick={this.props.action}>
                <h1 >Animation </h1>
                
            </div>
            </div>
        )
    }
}

export default BoxThree;
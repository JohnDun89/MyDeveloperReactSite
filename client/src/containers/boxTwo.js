import React from 'react'

class BoxTwo extends React.Component {


    render() {
        return (
            <div 
            onClick={this.props.actionBoxTwo}>
                <h1 className="hero-text">WebGL</h1>
            </div>
        )
    }
}

export default BoxTwo;
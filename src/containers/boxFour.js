import React from 'react'

class BoxFour extends React.Component {


    render() {
        return (
            <div className="box" 
                onClick={this.props.action}>
                <h1>GitHub</h1>
            </div>
        )
    }
}

export default BoxFour;
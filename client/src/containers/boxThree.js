import React from 'react'

class BoxThree extends React.Component {


    render() {
        return (
            <div 
                onClick={this.props.actionBoxThree}>
                <h1>Box Three</h1>
            </div>
        )
    }
}

export default BoxThree;
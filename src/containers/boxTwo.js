import React from 'react'

class BoxTwo extends React.Component {


    render() {
        return (
            <div 
            onClick={this.props.actionBoxTwo}>
                <h1>Box Two</h1>
            </div>
        )
    }
}

export default BoxTwo;
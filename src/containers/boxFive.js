import React from 'react'

class BoxFive extends React.Component {


    render() {
        return (
            <div className="box"
                onClick={this.props.action}>
                 <h1>Code</h1>
            </div>
        )
    }
}

export default BoxFive;
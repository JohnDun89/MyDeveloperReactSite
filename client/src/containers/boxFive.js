import React from 'react'

class BoxFive extends React.Component {


    render() {
        return (
            <div id="box-four"
                onClick={this.props.action}>
                <h1>GitHub</h1>
            </div>
        )
    }
}

export default BoxFive;
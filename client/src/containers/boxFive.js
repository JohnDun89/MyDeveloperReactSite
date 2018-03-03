import React from 'react'

class BoxFive extends React.Component {


    render() {
        return (
            <div className="box-normal-with-hover-transition"
                onClick={this.props.action}>
                 <h1>Code</h1>
            </div>
        )
    }
}

export default BoxFive;
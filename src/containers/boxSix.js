import React from 'react'

class BoxSix extends React.Component {


    render() {
        return (
            <div className="expanded-content"
                onClick={this.props.action}>
                <h1>Twitter</h1>
            </div>
        )
    }
}

export default BoxSix;
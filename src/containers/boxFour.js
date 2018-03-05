import React from 'react'

class BoxFour extends React.Component {


    render() {
        return (
            <div className="box box-normal-with-hover-transition" 
                onClick={this.props.action}>
                
                <h1>GitHub</h1>
                <div id="git-logo"></div>

            </div>
        )
    }
}

export default BoxFour;
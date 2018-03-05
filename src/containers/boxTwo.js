import React from 'react'

class BoxTwo extends React.Component {


    render() {
        return (
          
            <div className="box" id="box-two" onClick={this.props.action}>
                <div >
                <h1 id="web-gl-title">Web-GL</h1>

                </div>
            </div>
        )
    }
}

export default BoxTwo;

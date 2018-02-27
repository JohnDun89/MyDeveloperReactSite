import React from 'react'

class Github extends React.Component {


    render() {
        return (

            <div className="expanded-content" onClick={this.props.action}>
                <div >
                    <h1>Links to git hub and specific projects</h1>

                </div>
            </div>
        )
    }
}

export default Github;

import React from 'react'

class Github extends React.Component {


    render() {
        return (

            <div >
                <button className="back-button" onClick={this.props.close} type="button" >Close</button>
                <div >
                    <h1>Links to git hub and specific projects</h1>

                </div>
            </div>
        )
    }
}

export default Github;

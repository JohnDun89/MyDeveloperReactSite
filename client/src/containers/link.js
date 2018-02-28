import React from 'react'

class Link extends React.Component {
        constructor(props){
            super(props)
        }

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

export default Link;

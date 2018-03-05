import React from 'react';

class BoxThree extends React.Component {


    render() {
        return (

            <div className="box box-normal-with-hover-transition" onClick={this.props.action}>
                <div>
                    <h1 >3.D.</h1>
                    <p>Examples from 3D modeling projects, fluid simulations, and Photogrammetry.</p>
                    <h2>3.D.</h2>
                </div>
            </div>

        )
    }
}

export default BoxThree;

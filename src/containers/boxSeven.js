import React from 'react';

class BoxThree extends React.Component {


    render() {
        return (

            <div className="box box-normal-with-hover-transition" onClick={this.props.action}>
                <div>
                    <h1 >3.D.</h1>
                    <p>Examples from 3D modeling projects, fluid simulations, and Photogrammetry.</p>
                    <h3>3.D.</h3>
                </div>
            </div>

        )
    }
}

export default BoxThree;

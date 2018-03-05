import React from 'react';

class BoxThree extends React.Component {


    render() {
        return (

            <div className="box" id="box-three" onClick={this.props.action}>
            <div>
                <h1 >Animation </h1>
                <p>Dynamic SCSS animations.</p>
                  <div id="main-image-animation" ></div>

            </div>
            </div>

        )
    }
}

export default BoxThree;

import React from 'react';
import b4w from "blend4web";


class WebGl extends React.Component {

    constructor(props) {
        super(props)
       
    }


    

    render() {
        return (

            <div className="expanded-content" id="web-gl-box">
                <div className="button-container">
                    <button className="back-button" onClick={this.props.webGlAction} type="button" >Close</button>
                </div>
              <p>Web Gl content</p>
              {/* <div id="main_canvas_container" style="height: 100%; left: 0px; position: absolute; top: 0px; width: 100%;"></div> */}

              <iframe width="800" height="500" allowFullScreen src="src/my_project/my_project.json"></iframe>
            </div>
        )
    }
}

export default WebGl;



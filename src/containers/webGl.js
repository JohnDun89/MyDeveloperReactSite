import React from 'react';
import b4w from "blend4web";


class WebGl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            BoxTwo: true
        }
    }

    // the component needs to change the scale fo the div rpior to mount. as right now it mounts with no content

    componentWillMount() {
        console.log(this.state.BoxTwo)
        document.querySelector('main_canvas_container')
        return (
            <main>
                <div></div>
            </main>
        ) 
    }

    componentDidMount() {

//aware this is not ideal for React. Sadly it is the only way B4W library will work.
        const m_app = b4w.app;
        const m_cfg = b4w.config;
        const m_data = b4w.data;
        const m_preloader = b4w.preloader;
        const m_ver = b4w.version;
        var DEBUG = (m_ver.type() === "DEBUG");
        var APP_ASSETS_PATH = m_cfg.get_assets_path();
        
        function initialize() {
          m_app.init({
                canvas_container_id: 'main_canvas_container',
                callback: initializeCallback,
                show_fps: DEBUG,
                console_verbose: DEBUG,
                autoresize: true
            });
            m_data.unload();           
        }

        function initializeCallback(canvas, success) {
            if (!success) {
                console.log("b4w init failure");
                return;
            }
            m_preloader.create_preloader();
            canvas.oncontextmenu = function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };
            load();
        }


        function load() {
            m_data.load(APP_ASSETS_PATH + "dinburghblack.json", loadCallback, preloaderForCallback);
        }

        function preloaderForCallback(percentage) {
            m_preloader.update_preloader(percentage);
        }

        function loadCallback(data_id, success) {
            if (!success) {
                console.log("b4w load failure");
                return;
            }
            m_app.enable_camera_controls();

        }


        initialize();
    }

    componentWillUnmount() {
        //resets library when componenet un mounts. will not work without this! 
        console.log('unmounted')
        b4w.require("main").reset()
    }

    render() {
        if (this.state.BoxTwo === true) {
            return(
            <main>
                
                <div className="expanded-box" id="web-gl-box">
                            <button className="back-button" onClick={this.props.close} type="button" >Close</button>            
                            <div className="expanded-box-flex">                   
                    <br/>
                    
                    <h2>Please be patient - sometimes the Heroku servers take a while to load the model. </h2>
                    <p>Left click to rotate, mouse wheel to zoom and right click to move.</p>
                    <div id='main_canvas_container'></div>
                </div>
                </div>
    
            </main>
            )
        } else {
            return(
            <div></div>
            )
        }
}
}
export default WebGl;



import React from 'react';
import b4w from "blend4web";


class WebGl extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            open: true
        }
    }



    componentDidMount() {


        const m_app = b4w.app;
        const m_cfg = b4w.config;
        const m_data = b4w.data;
        const m_preloader = b4w.preloader;
        const m_ver = b4w.version;
       
        var DEBUG = (m_ver.type() === "DEBUG");

        // automatically detect assets path
        var APP_ASSETS_PATH = m_cfg.get_assets_path();


        
        function initialize() {
           
           
            m_app.init({
                canvas_container_id: 'main_canvas_container',
                callback: initializeCallback,
                show_fps: DEBUG,
                console_verbose: DEBUG,
                autoresize: true
            });

        }

        function initializeCallback(canvas, success) {

            if (!success) {
                console.log("b4w init failure");
                return;
            }

            m_preloader.create_preloader();

            // ignore right-click on the canvas element
            canvas.oncontextmenu = function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };

            load();
        }


        function load() {
            m_data.load(APP_ASSETS_PATH + "dinburgh.json", loadCallback, preloaderForCallback);
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


    //here I need to unmount the component 


    render() {
        return (
            <main>
                <div className="expanded-content" id="web-gl-box">
                    <div className="button-container" >
                        <button className="back-button" onClick={this.props.webGlAction} type="button" >Close</button>
                    </div>
                    <p>Web Gl content</p>

                    <div id="main_canvas_container">

                    </div>


                </div>
            </main>
        )
    }
}

export default WebGl;



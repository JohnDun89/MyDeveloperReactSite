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
        const m_anim = b4w.animation;
        const m_cont = b4w.container;
        const m_mouse = b4w.mouse;
        const m_scenes = b4w.scenes;
        const material = b4w.material;

        var _previous_selected_obj = null;

        // detect application mode
        var DEBUG = (m_ver.type() == "DEBUG");

        // automatically detect assets path
        var APP_ASSETS_PATH = m_cfg.get_assets_path();

        /**
         * export the method to initialize the app (called at the bottom of this file)
         */
        function init() {
            const parentDiv = document.querySelector('#main_canvas_container')
            const container = document.createElement('div')
            parentDiv.appendChild(container)
            m_app.init({
                canvas_container_id: parentDiv,
                callback: init_cb,
                show_fps: DEBUG,
                console_verbose: DEBUG,
                autoresize: true
            });
        }

        /**
         * callback executed when the app is initialized 
         */
        function init_cb(canvas_elem, success) {

            if (!success) {
                console.log("b4w init failure");
                return;
            }

            m_preloader.create_preloader();

            // ignore right-click on the canvas element
            canvas_elem.oncontextmenu = function (e) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            };

            load();
        }

        /**
         * load the scene data
         */
        function load() {
            m_data.load(APP_ASSETS_PATH + "dinburgh.json", load_cb, preloader_cb);
        }

        /**
         * update the app's preloader
         */
        function preloader_cb(percentage) {
            m_preloader.update_preloader(percentage);
        }

        /**
         * callback executed when the scene data is loaded
         */
        function load_cb(data_id, success) {

            if (!success) {
                console.log("b4w load failure");
                return;
            }

            m_app.enable_camera_controls();
            //here you can find objects as they are named in blender
            // const bottle = m_scenes.get_object_by_name("tumbler")
            // const material_list = material.get_materials_names(bottle)
            // console.log(bottle)
            // console.log(material_list)

        }


        init();
    }


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



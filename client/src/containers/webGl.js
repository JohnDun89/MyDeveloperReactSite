import React from 'react';
import b4w from "blend4web";

const m_app = b4w.app;
const m_cfg = b4w.config;
const m_data = b4w.data;
const m_preloader = b4w.preloader;
const m_ver = b4w.version;

const DEBUG = (m_ver.type() === "DEBUG");

const APP_ASSETS_PATH = m_cfg.get_assets_path();
console.log(m_app)
console.log(APP_ASSETS_PATH)
class WebGl extends React.Component {

    constructor(props) {
        super(props)
       this.state = {
           open: true
       }
    }

    
    componentDidMount() {
        console.log('component did mount web gl ')
        this.init()
    }
   
    init() {
        if (this.state.open === true) {
        console.log('ititializing')

    m_app.init({
        canvas_container_id: "main_canvas_container",
        callback: this.init_cb(),
        show_fps: DEBUG,
        console_verbose: DEBUG,
        autoresize: true
    });
    }
}

    init_cb(canvas_elem, success) {

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

    this.load();
}

load() {
    m_data.load(APP_ASSETS_PATH + "dinburgh.json", this.load_cb, this.preloader_cb);
   
}

preloader_cb(percentage) {
    m_preloader.update_preloader(percentage);
}

/**
 * callback executed when the scene data is loaded
 */  load_cb(data_id, success) {

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




    

    

    render() {
        return (

            <div className="expanded-content" id="web-gl-box">
                <div className="button-container">
                    <button className="back-button" onClick={this.props.webGlAction} type="button" >Close</button>
                </div>
              <p>Web Gl content</p>
              <canvas width="800px" height="500px" id="main_canvas_container" />
            </div>
        )
    }
}

export default WebGl;



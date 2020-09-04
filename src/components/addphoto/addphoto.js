import React, {Component} from "react";
import classes from "./addphoto.module.css"
import ImageCrop from "./cropprofile/cropcrop";

class Addphoto extends Component {
    render() {
        return (
            <div className={classes.Back}>
                <div>
                    <ImageCrop onScaleChange={} scaleValue={} onCrop={} setEditorRef={} open={}/>
                </div>
            </div>
        );


    }
}
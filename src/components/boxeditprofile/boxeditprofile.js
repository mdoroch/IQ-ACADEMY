import React from "react";
import classes from "./boxeditprofile.module.css"
import {withRouter} from 'react-router-dom';
import Editprofile from "../editprofile/editprofile";

class Boxeditprofile extends React.Component {
    render() {
        return (
            <div>
                <div className={classes.Boxeditprofile}>
                    <Editprofile/>
                </div>
            </div>
        );
    }
}

export default withRouter(Boxeditprofile)
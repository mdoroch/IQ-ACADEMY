import React from "react";
import classes from "./box.module.css"
import Api from "../api/api";
import Login from "../login/login";
// import Form from "../regi/regi";

class Box extends React.Component {

    render() {
        return (
            <div className={classes.Box}>
            {/*<h1 className={classes.text1}>Регистра */}

              <Api/>


            </div>

        );
    }
}

export default Box;

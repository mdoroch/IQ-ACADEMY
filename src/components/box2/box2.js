import React from "react";
import classes from "./box2.module.css"
// import Api from "../api/api";
import Login from "../login/login";
import { withRouter } from 'react-router-dom';
// import Form from "../regi/regi";

class Box2 extends React.Component {

    render() {
        return (
            <div>

            <div className={classes.Box2}>
                <div className={classes.Title1}>Вход</div>
                {/*<h1 className={classes.text1}>Регистра */}
              <Login/>


            </div>
            </div>
        );
    }
}

export default withRouter(Box2);
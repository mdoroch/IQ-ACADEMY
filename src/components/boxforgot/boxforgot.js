import React from "react";
import classes from "./boxforgot.module.css"
// import Api from "../api/api";

import { withRouter } from 'react-router-dom';
import Forgot from "../forgot/forgot";
// import Form from "../regi/regi";

class Boxforgot extends React.Component {

    render() {
        return (
            <div>

                <div className={classes.Boxforgot}>
                    {/*<div className={classes.Title1}>Восстановление пароля</div>*/}
                    {/*<h1 className={classes.text1}>Регистра */}
                    <Forgot/>
                </div>
            </div>
        );
    }
}

export default withRouter(Boxforgot);
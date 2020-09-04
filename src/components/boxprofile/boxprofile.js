import React from "react";
import classes from "./boxprofile.module.css"
// import Api from "../api/api";

import { withRouter } from 'react-router-dom';
// import Profile from "../profile/profile";
import Profile from "../profile/profile";


// import Form from "../regi/regi";

class Boxprofile extends React.Component {

    render() {
        return (
            <div>

                <div className={classes.Boxprofile}>
                    {/*<div className={classes.Title1}>Восстановление пароля</div>*/}
                    {/*<h1 className={classes.text1}>Регистра */}
                <Profile/>
                </div>
            </div>
        );
    }
}

export default withRouter(Boxprofile);
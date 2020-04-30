import React, { Component } from "react";
import classes from "./login.module.css";
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Field} from "../input/input";
import Logo from "../pictures/Logo for use.svg";
import Box from "../box/box";
import Auth from "../api/api";

function SendEmailOrPhone(props) {
    return (
        <div>

            <div className={classes.Inputs1}>

                <input className={classes.Login1}
                       type="text"
                       name="phoneOrMail"
                    value={props.phoneOrMail}
                       placeholder="Email или телефон"
                        onChange={(e) => props.onPhoneOrMailChangeHandler(e)}
                       />
                <input className={classes.Login2}
                       type="text"
                       name="password"
                    value={props.password}
                       placeholder="Пароль"
                    onChange={(e) => props.onPasswordChangeHandler(e)}
                />
                <button className={classes.Button2} type="submit" onClick={props.submitHandler}>Активировать
                </button>

            </div>
        </div>
    )
}

class Login extends Component {
    constructor(props) {
        // this.formData = new FormData()
        super();
        this.state = {
            phoneOrMail: "",
            password: "",
        };
    }

    sendEmailOrPhone = () => {
        console.log("sendEmailOrPhone");
        this.formData = new FormData();
        this.formData.append("phone_or_mail", this.state.phoneOrMail);
        this.formData.append("password", this.state.password);


        // console.log(this.formData);
        // console.log(this.state.phone_or_mail)
        fetch("https://api.iq.academy/api/account/login", {
            method: "POST",
            // mode: 'no-cors',
            // mode: 'cors',
            headers: {
                // "Content-Type": "multipart/form-data"
            },
            body: this.formData,
        }).then((Data) => {


            this.props.history.push("/registration")
            console.log(this.formData);
            localStorage.setItem('token', "ff");
            console.log(localStorage);
            // this.setState({ "authStep": 1 });
        });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handlePhoneOrMailChange = (e) => {
        // console.log(e.target.value);
        this.setState({ phoneOrMail: e.target.value });
    };
    render() {
        return (
            <div>

                <SendEmailOrPhone
                    phoneOrMail={this.state.phoneOrMail}
                    password={this.state.password}
                    onPhoneOrMailChangeHandler={this.handlePhoneOrMailChange}
                    onPasswordChangeHandler={this.handlePasswordChange}
                    submitHandler={this.sendEmailOrPhone}
                />

                <div className={classes.Div1}>Нет аккаунта?
                    <nav>
                        <Link to="/registration"><div>Регистрация</div></Link>
                    </nav>
            {/*        <Router>*/}
            {/*            <div>*/}
            {/*                <nav>*/}
            {/*                    <link to="/registration">11</link>*/}
            {/*                </nav>*/}
            {/*                <Switch>*/}
            {/*                    <Route path="/registration">*/}
            {/*                        <Logo/>*/}

            {/*                        <Box/>*/}
            {/*                        <Auth/>*/}
            {/*                    </Route>*/}
            {/*                </Switch>*/}
            {/*            </div>*/}
            {/*</Router>*/}

                </div>
            </div>
        )
    }
}
    export default withRouter(Login);
import React, { Component } from "react";
import classes from "./login.module.css";
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {saveToken,giveToken} from "../../supportfunction";
import {Field} from "../input/input";
import Logo from "../pictures/Logo for use.svg";
import Box from "../box/box";
import Auth from "../api/api";



function SendEmailOrPhone(props) {
    return (
        <div>

            <div className={classes.Inputs1}>
                <form>
                    <label>
                <input className={classes.Login1}

                       // type="email"
                       name="phoneOrMail"
                    value={props.phoneOrMail}
                       placeholder="Email или телефон"
                        onChange={(e) => props.onPhoneOrMailChangeHandler(e)}
                       // required pattern="a-z"

                       />
                    </label>
                <input className={classes.Login2}
                       // type="password"
                       name="password"
                    value={props.password}
                       placeholder="Пароль"
                    onChange={(e) => props.onPasswordChangeHandler(e)}
                       // required pattern="a-z"
                       minLength="8"
                />
                <button className={classes.Button2} type="submit" onClick={props.submitHandler}>Активировать
                </button>
                </form>
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


// var email =/^[а-яА-Яa-zA-Z0-9_\.\-]+@[а-яА-Яa-zA-Z0-9\-]+\.[а-яА-Яa-zA-Z\-\.]+$/;

    sendEmailOrPhone = async () => {
        this.formData = new FormData();
        this.formData.append("phone_or_mail", this.state.phoneOrMail);
        this.formData.append("password", this.state.password);


        // async
        // componentDidMount()
        {
            const requestOptions = {
                method: 'POST',
                headers: {
                    // "Content-Type": "multipart/form-data"
                },
                body: this.formData
            };
            const response = await fetch('https://api.iq.academy/api/account/login', requestOptions);
            const data = await response.json();
            saveToken(data.token);
            console.log(data.token);
            this.props.history.push("/editprofile")

        }
    }



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
                        {/*<Link to="/registration"><div>Регистрация</div></Link>*/}
                        <Link to="/registration"><div>Регистрация</div></Link>
                    </nav>


                </div>
            </div>
        )
    }
}
    export default withRouter(Login);
// export default Login;

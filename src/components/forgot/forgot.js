import React, { Component } from "react";
import classes from "./forgot.module.css"
import { withRouter } from 'react-router-dom';
import {Field} from "../input/input";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "../login/login";

function SendEmailOrPhone(props) {
    return (
        <div>
            <div className={classes.Send}>
                Восстановление пароля
            </div>
            <div>
                <div className={classes.Inputs}>
                    {/*<div className={classes.Input1}>*/}

                    <div>
                        <input className={classes.Input2}
                               type="text"
                               name="phoneOrMail"
                               value={props.phoneOrMail}
                               placeholder="Email или телефон"
                               onChange={(e) => props.onPhoneOrMailChangeHandler(e)}
                        />
                    </div>
                </div>

                <button className={classes.Button1} type="submit" onClick={props.submitHandler}>Восстановить

                </button>

            </div>
        </div>
    );
}

function SendCodeAndPassword(props) {
    return (
        <div>
            <div className={classes.Check}>
                Активация
            </div>
            <div>
                <div className={classes.Inputs2}>
                    <input className={classes.Input3}
                           type="text"
                           name="code"
                           value={props.code}
                           placeholder="Код"
                           onChange={(e) => props.onCodeChangeHandler(e)}
                    />
                    <input className={classes.Input4}
                           type="text"
                           name="password"
                           value={props.password}
                           placeholder="Новый пароль"
                           onChange={(e) => props.onPasswordChangeHandler(e)}
                    />
                </div>
                <button className={classes.Button2} type="submit" onClick={props.submitHandler}>Сохранить и войти
                </button>
            </div>
        </div>
    );
}



class Forgot extends Component {
    constructor(props) {
        // this.formData = new FormData()
        super();
        this.state = {
            authStep: 0,

            phoneOrMail: "",
            code: "",
            password: "",
        };
    }

    sendEmailOrPhone = () => {
        console.log("sendEmailOrPhone");
        this.formData = new FormData();
        // this.formData.append("name", this.state.name);
        this.formData.append("phone_or_mail", this.state.phoneOrMail);

        console.log(this.formData);
        // console.log(this.state.phone_or_mail)
        fetch("https://api.iq.academy/api/account/forgotpassword", {
            method: "POST",
            // mode: 'no-cors',
            // mode: 'cors',
            headers: {
                // "Content-Type": "multipart/form-data"
            },
            body: this.formData,
        }).then((Data) => {
            console.log(this.formData);
            this.setState({ "authStep": 1 });
        });
    };

    sendCodeAndPassword = () => {
        // this.props.history.push("/login");
        this.formData = new FormData();
        this.formData.append("phone_or_mail", this.state.phoneOrMail);
        this.formData.append("code", this.state.code);
        this.formData.append("password", this.state.password);

        console.log(this.formData);
        // console.log(this.state.phone_or_mail)
        fetch("https://api.iq.academy/api/account/registration", {
            method: "POST",
            // mode: 'no-cors',
            // mode: 'cors',
            headers: {
                // 'Content-Type': 'multipart/form-data'
            },
            body: this.formData,
        }).then((Data) => {
            this.props.history.push("/login")

            console.log(this.formData);
        });
    };

    // handleNameChange = (e) => {
    //     this.setState({ name: e.target.value });
    // };

    handleCodeChange = (e) => {
        this.setState({ code: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handlePhoneOrMailChange = (e) => {
        console.log(e.target.value);
        this.setState({ phoneOrMail: e.target.value });
    };

    render() {
        return this.state.authStep ? (
            <div>
                <div className={classes.Info1}>Сейчас Вам поступит звонок. Введите в поле кода последние 6 цифр номера телефона</div>
                <SendCodeAndPassword
                    code={this.state.code}
                    password={this.state.password}
                    onCodeChangeHandler={this.handleCodeChange}
                    onPasswordChangeHandler={this.handlePasswordChange}
                    submitHandler={this.sendCodeAndPassword}
                />


            </div>
        ) : (
            <div>
                <SendEmailOrPhone
                    // name={this.state.name}
                    phoneOrMail={this.state.phoneOrMail}
                    // onNameChangeHandler={this.handleNameChange}
                    onPhoneOrMailChangeHandler={this.handlePhoneOrMailChange}
                    submitHandler={this.sendEmailOrPhone}
                />
                <div className={classes.Div1}>Вспомнили пароль?
                    <nav>
                        <Link to="/login"><div>Войти</div></Link>
                    </nav>
                </div>
            </div>
        );
    }
}
export default withRouter(Forgot);
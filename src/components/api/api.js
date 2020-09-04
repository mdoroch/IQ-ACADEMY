import React, { Component } from "react";
import classes from "./api.module.css"
import { withRouter } from 'react-router-dom';
import {Field} from "../input/input";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "../login/login";

function SendCodeAndPassword(props) {
    return (
        <div>
            {/*<div className={classes.Check}>*/}
            {/*Активация*/}
            {/*</div>*/}
            <div>
                <div className={classes.Inputs2}>
                <input className={classes.Input3}
                    type="text"
                    name="code"
                    value={props.code}
                       placeholder="Код"
                    onChange={(e) => props.onCodeChangeHandler(e)}
                       minLength="4"
                       maxLength="4"
                />
                <input className={classes.Input4}
                    type="password"
                    name="password"
                    value={props.password}
                       placeholder="Пароль"
                    onChange={(e) => props.onPasswordChangeHandler(e)}
                />
                </div>
                <button className={classes.Button2} type="submit" onClick={props.submitHandler}>Активировать
                </button>
            </div>
        </div>
    );
}

function SendEmailOrPhone(props) {
    return (
        <div>

            <div>
            <div className={classes.Inputs}>
                {/*<div className={classes.Input1}>*/}
                <input className={classes.Input1}
                    type="text"
                    name="name"
                    value={props.name}
                       placeholder="Имя"
                    onChange={(e) => props.onNameChangeHandler(e)}
                />
                {/*x§>*/}
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

                <button className={classes.Button1} type="submit" onClick={props.submitHandler}>Зарегистрироваться

                </button>

            </div>
        </div>
    );
}

class Auth extends Component {
    constructor(props) {
        // this.formData = new FormData()
        super();
        this.state = {
            authStep: 0,
            name: "",
            phoneOrMail: "",
            code: "",
            password: "",
        };
    }

    sendEmailOrPhone = () => {
        console.log("sendEmailOrPhone");
        this.formData = new FormData();
        this.formData.append("name", this.state.name);
        this.formData.append("phone_or_mail", this.state.phoneOrMail);

        console.log(this.formData);
        // console.log(this.state.phone_or_mail)
        fetch("https://api.iq.academy/api/account/registration", {
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

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };

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
                <div className={classes.Check}>
                    Активация
                </div>
                <div>
                    <div className={classes.Rounds3}><div className={classes.Val3}>1</div>
                    </div>
                    <div className={classes.Rounds4}><div className={classes.Val4}>2</div>
                    </div>
                </div>
                <div className={classes.Info1}>Сейчас Вам поступит звонок. Введите в поле кода последние 4 цифры номера телефона</div>

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
                <div className={classes.Send}>
                    Регистрация
                </div>
                <div>
                <div className={classes.Rounds1}><div className={classes.Val1}>1</div>
                </div>
                <div className={classes.Rounds2}><div className={classes.Val2}>2</div>
                </div>
                </div>
            <SendEmailOrPhone
                name={this.state.name}
                phoneOrMail={this.state.phoneOrMail}
                onNameChangeHandler={this.handleNameChange}
                onPhoneOrMailChangeHandler={this.handlePhoneOrMailChange}
                submitHandler={this.sendEmailOrPhone}
            />


                <div className={classes.Div1}>Есть аккаунт?
                    <nav>
                        <Link to="/login"><div className={classes.Link1}>&nbsp;Войти</div></Link>
                    </nav>
                </div>
            </div>
        );
    }
}
export default withRouter(Auth);
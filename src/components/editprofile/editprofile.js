import React, {Component} from "react";

import classes from "./editprofile.module.css"
import {saveToken,giveToken} from "../login/login"
import { withRouter } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Sendeditprofile(props) {
    return (
<div>
    <div>
        <div className={classes.Circle}>
            <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="62.5" cy="62.5" r="60.5" stroke="#0FBDE9" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 10"/>
            </svg>

        </div>
    <input className={classes.Input1}
        type="text"
        name="name"
        value={props.name}
        placeholder="Имя"
        onChange={(e) => props.onNameChangeHandler(e)}
    />
        <input className={classes.Input12}
               type="text"
               name="mail"
               value={props.mail}
               placeholder="Email"
               // onChange={(e) => props.onNameChangeHandler(e)}
        />
        <input className={classes.Input13}
               type="text"
               name="phone"
               value={props.phone}
               placeholder="Телефон"
               // onChange={(e) => props.onPhoneChangeHandler(e)}
        />
    <input className={classes.Input2}
        type="text"
        name="password"
        value={props.password}
        placeholder="Пароль"
        onChange={(e) => props.onPasswordChangeHandler(e)}
    />
    <div className={classes.Birthday}>Дата рождения</div>
    <div>
        <form>
        <input className={classes.Input3} type="date"
               name="birthday"
               value={props.birthday}
               onChange={(e) => props.onBirthdayChangeHandler(e)}/>
        </form>
    </div>
    <div className={classes.Sex1}>Пол</div>
    <select className={classes.Select} name="sex" >
        <option
            value="0"
        >Не выбран</option>
        <option
            value="1"
            // selected=""
        >Мужской</option>
        <option
            value="2"
        >Женский</option>
    </select>

        </div>
    <button className={classes.Button1} type="submit" onClick={props.submitHandler}>Сохранить</button>
    <div className={classes.Photo}>Фото</div>
</div>
    );
}
class Editprofile extends Component {


    constructor(props) {
        super();
        this.state = {
            name: "",
            photo: "",
            birthday: "",
            sex: "",
            notifications: "",
            password: "",
            mail: "",
            phone: ""
        };
    }
    Sendeditprofile = () => {
       this.formData = new FormData();
       this.formData.append("name", this.state.name);
       this.formData.append("password", this.state.password);
       this.formData.append("birthday", this.state.birthday);
       this.formData.append("sex", this.state.sex);
       console.log(this.formData);
       fetch("https://api.iq.academy/api/account/editprofile", {
           method: "POST",
           headers: {

           },
           body: this.formData,
       }).then((Data) => {
             console.log(this.formData);
           this.props.history.push("/addphoto")

       });
    };

    handleNameChange = (e) => {
        this.setState({ name: e.target.value });
    };



    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    handleBirthdayChange = (e) => {
        this.setState({ birthday: e.target.value });
    };

    handleSexChange = (e) => {
        // console.log(e.target.value);
        this.setState({ sex: e.target.value });
    };



    render() {
        return (
            <div>
<div className={classes.P1}>Настройки профиля</div>
<Sendeditprofile
    name={this.state.name}
    password={this.state.password}
    birthday={this.state.birthday}
    sex={this.state.sex}
    onNameChangeHandler={this.handleNameChange}
    onPasswordChangeHandler={this.handlePasswordChange}
    onBirthdayChangeHandler={this.handleBirthdayChange}
    onSexChangeHandler={this.handleSexChange}
    submitHandler={this.Sendeditprofile}


/>
            </div>
        );


    }


}
export default withRouter(Editprofile);
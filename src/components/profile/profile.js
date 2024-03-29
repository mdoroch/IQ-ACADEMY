import React from "react";
import { withRouter } from 'react-router-dom';
// import {HttpMethod} from "ionic";
import AvatarEditor from "react-avatar-editor";
import {saveToken, giveToken} from "../../supportfunction";
import classes from "./profile.module.css"
// import { withRouter } from 'react-router-dom';

// import Login from "../login/login";
function GetItems(props) {
    return (
        <div>
            <div>
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
                       onChange={(e) => props.onNameChangeHandler(e)}
                       />
                       <input className={classes.Input13}
                              type="text"
                              name="phone"
                              value={props.phone}
                              placeholder="Телефон"
                              onChange={(e) => props.onNameChangeHandler(e)}
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
            <button className={classes.Button1} type="submit" onClick={props.submitHandler}>Изменить</button>
            <svg className="App-logo" width="146" height="146" viewBox="0 0 146 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M41.5346 136.842C41.089 137.746 39.9935 138.12 39.1009 137.652C25.1472 130.336 13.9189 118.691 7.11865 104.443C0.318419 90.1944 -1.67235 74.1411 1.41601 58.6915C1.61358 57.7031 2.59309 57.0865 3.57621 57.3087C4.55933 57.5309 5.17364 58.5078 4.97737 59.4964C2.06898 74.1461 3.96563 89.3622 10.4127 102.871C16.8598 116.379 27.4965 127.424 40.715 134.377C41.6071 134.846 41.9802 135.938 41.5346 136.842Z" fill="url(#paint0_linear)"/>
                <path d="M31.2094 15.3856C30.6176 14.5697 30.7981 13.4264 31.6285 12.8552C44.6092 3.92593 60.1471 -0.573518 75.9224 0.0585196C91.6977 0.690557 106.826 6.41864 119.051 16.3577C119.833 16.9936 119.921 18.1476 119.266 18.9136C118.611 19.6795 117.46 19.7671 116.677 19.1323C105.076 9.7256 90.7323 4.30481 75.7763 3.7056C60.8202 3.10638 46.0888 7.36228 33.7723 15.8107C32.9412 16.3808 31.8012 16.2015 31.2094 15.3856Z" fill="url(#paint1_linear)"/>
                <path d="M142.016 55.603C142.993 55.3566 143.988 55.9489 144.21 56.9321C147.678 72.301 146.083 88.3985 139.636 102.81C133.189 117.222 122.251 129.139 108.482 136.797C107.601 137.287 106.496 136.94 106.029 136.047C105.561 135.155 105.907 134.054 106.787 133.563C119.831 126.286 130.192 114.983 136.304 101.32C142.417 87.6564 143.938 72.3981 140.669 57.8246C140.449 56.8411 141.039 55.8493 142.016 55.603Z" fill="url(#paint2_linear)"/>
                <defs>
                    <linearGradient id="paint0_linear" x1="73" y1="0" x2="73" y2="146" gradientUnits="userSpaceOnUse">
                        <stop offset="0.424435" stop-color="#0FBDE9"/>
                        <stop offset="0.895953" stop-color="#5C34FA" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear" x1="73" y1="0" x2="-14" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#57B535"/>
                        <stop offset="0.385417" stop-color="#0FBDE9" stop-opacity="0"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear" x1="73" y1="0" x2="73" y2="146" gradientUnits="userSpaceOnUse">
                        <stop offset="0.46875" stop-color="#57B535" stop-opacity="0"/>
                        <stop offset="0.807292" stop-color="#5C34FA"/>
                    </linearGradient>
                </defs>
            </svg>

        </div>


);

}
class Profile extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: "",
            photo: "",
            birthday: "",
            sex: "",
            notifications: "",
            password: "",
        }
    }


    // GetItem = async() => {
    async componentDidMount() {

        console.log("GetItem");
        this.token = giveToken()

        const requestOptions = {
            method: 'POST',

            headers: ({

                // 'Authorization': 'Bearer 7vicuLuX24wTl21RaPcDzV4X6EKBdJp
                'Authorization': 'Bearer '+ this.token,


                // 'Content-Type': 'multipart/form-data'
            }),
            body: this.formData,

        };

        const response = await fetch("https://api.iq.academy/api/account/profile", requestOptions);

        const data = await response.json();


    }
    render() {

        return (
            <div>
                {/*<AvatarEditor/>*/}
                <div className={classes.P1}>Настройки профиля</div>
                <GetItems

                />
            </div>

        );

    }
}

export default withRouter(Profile);
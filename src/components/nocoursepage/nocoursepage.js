import React, {Component} from "react";
import classes from "./nocoursepage.module.css"
    import {withRouter} from "react-router";
    import {
        BrowserRouter as Router,
        Switch,
        Route,
        Link
    } from "react-router-dom";

class Nocoursepage extends Component {

    render() {
        return (
            <div>
                <div className={classes.H1} align="center" >Добро пожаловать в платформу IQ.Academy!</div>
                <div className={classes.H2} align="center" >Если Вы преподаватель, специалист в каком-либо направлении и планируете <br/> зарабатывать деньги на обучении, создайте свой курс и начните его продвигать</div>
                <button className={classes.But1}>Создать курс</button>
                <div className={classes.H3}>или нажмите</div>
                <div className={classes.H4}>в углу экрана</div>
                <div className={classes.H5} align="center" >Если Вы планируете обучение, Вы можете найти нужный <br/> курс через поиск или отсканировав QR-код с телефона</div>
                <button className={classes.But2}>Найти курс</button>
                <div className={classes.H6}>или нажмите</div>
                <div className={classes.H7}>в углу экрана</div>
                <svg className={classes.Svg} width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="31.334" y="15" width="9.33333" height="42" fill="#E1D3C1"/>
                    <rect width="9.33333" height="42" transform="matrix(0 -1 -1 0 57 40.6672)" fill="#E1D3C1"/>
                    <circle cx="36" cy="36" r="35.5" stroke="#E1D3C1"/>
                </svg>
                <svg className={classes.Svg2} width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M41.1524 57.6513C57.059 57.6513 70 44.7202 70 28.8256C70 12.9311 57.059 0 41.1524 0C25.2457 0 12.3047 12.9311 12.3047 28.8256C12.3047 44.7202 25.2457 57.6513 41.1524 57.6513ZM41.1524 5.46458C54.0436 5.46458 64.5313 15.9443 64.5313 28.8256C64.5313 41.707 54.0436 52.1867 41.1524 52.1867C28.2612 52.1867 17.7735 41.707 17.7735 28.8256C17.7735 15.9443 28.2612 5.46458 41.1524 5.46458ZM0.800829 69.1999C-0.266943 68.1328 -0.266943 66.4027 0.800829 65.3357L13.0371 53.1087C14.1051 52.0416 15.8365 52.0416 16.9042 53.1087C17.972 54.1758 17.972 55.9059 16.9042 56.9729L4.66792 69.1999C4.13403 69.7333 3.43417 70 2.7343 70C2.03444 70 1.33485 69.7333 0.800829 69.1999Z" fill="#E1D3C1"/>
                </svg>
                <svg className={classes.Svg3} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.2852 21.4133C21.1934 21.4133 26 16.6104 26 10.7067C26 4.80298 21.1934 0 15.2852 0C9.37698 0 4.57033 4.80298 4.57033 10.7067C4.57033 16.6104 9.37698 21.4133 15.2852 21.4133ZM15.2852 2.0297C20.0733 2.0297 23.9688 5.92216 23.9688 10.7067C23.9688 15.4912 20.0733 19.3836 15.2852 19.3836C10.497 19.3836 6.60158 15.4912 6.60158 10.7067C6.60158 5.92216 10.497 2.0297 15.2852 2.0297ZM0.297451 25.7028C-0.0991503 25.3065 -0.0991503 24.6638 0.297451 24.2675L4.84237 19.7261C5.23902 19.3297 5.88211 19.3297 6.27872 19.7261C6.67532 20.1224 6.67532 20.765 6.27872 21.1613L1.7338 25.7028C1.5355 25.901 1.27555 26 1.0156 26C0.75565 26 0.495802 25.901 0.297451 25.7028Z" fill="#E1D3C1"/>
                </svg>
                {/*<svg className={classes.Svg4} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
                {/*    <circle cx="14" cy="14" r="13.5" stroke="#E1D3C1"/>*/}
                {/*</svg>*/}
                <svg className={classes.Svg4} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="12.2666" y="6.19995" width="3.46667" height="15.6" fill="#E1D3C1"/>
                    <rect width="3.46667" height="15.6" transform="matrix(0 -1 -1 0 21.7998 15.7334)" fill="#E1D3C1"/>
                    <circle cx="14" cy="14" r="13.5" stroke="#E1D3C1"/>
                </svg>





            </div>

        )
    }
}
export default Nocoursepage;
//
// export default withRouter(Nocoursepage);

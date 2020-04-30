import React, {Component} from 'react';
import Icon from "antd/es/icon";
import { withRouter } from 'react-router-dom';
import './pushmenu.css';
import Box from "../box/box";
import 'style'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import classes from "../api/api.module.css";


class Push extends Component {
    constructor(props){
        super(props);
        this.wrapperRef = React.createRef();
    }
    handleClick() {
        const wrapper = this.wrapperRef.current;
        wrapper.classList.toggle('is-nav-open')
    }
    render() {
        return (
          <div>
              <div>
              <svg width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg"
                   className="nav__icon"
                   type="menu-fold"
                   onClick={() => this.handleClick()}>
                  <rect width="26" height="2" rx="1" fill="#E1D3C1"/>
                  <rect width="26" height="2" rx="1" fill="#E1D3C1"/>
                  <rect y="10" width="26" height="2" rx="1" fill="#E1D3C1"/>
                  <rect y="20" width="26" height="2" rx="1" fill="#E1D3C1"/>
                  {/*className="nav__icon"*/}
                  {/*type="menu-fold"*/}
                  {/*onClick={() => this.handleClick()}*/}
              </svg>
              </div>
            <div ref={this.wrapperRef} className="wrapper">
                {/*<button*/}
                {/*    className="nav__icon"*/}
                {/*    type="menu-fold"*/}
                {/*    onClick={() => this.handleClick()}></button>*/}
                <div className="nav">


                     {/*<button className="But1">*/}
                         <nav>
                             <Link to="/login"><button className="But1">ff</button></Link>
                         </nav>
                     {/*</button>*/}


                         {/*    <Switch>*/}
                         {/*        <Route path="/registration">*/}
                         {/*            <Box/>*/}
                         {/*        </Route>*/}
                         {/*    </Switch>*/}
                         {/*</Router>*/}


                    <div className="nav__body">

                    </div>
                </div>

            </div>
          </div>

        );
    }
}

export default withRouter(Push);
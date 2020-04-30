import React from "react";

import Logo from "./components/logo/logo";
import Profile from "./components/profile/profile";
import {withRouter} from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "./components/login/login";
import Box from "./components/box/box";
import Auth from "./components/api/api";
import Box2 from "./components/box2/box2"
import Boxforgot from "./components/boxforgot/boxforgot";
import Push from "./components/pushmenu/pushmenu";
import ExampleCss from "./components/pushmenu/pushmenu";
import Boxprofile from "./components/boxprofile/boxprofile";

// import Sidebar from "./components/pushmenu/pushmenu'

class App extends React.Component {
    render() {
        return (
             <div>

                 <Router>
                     <div>

                         {/*<nav>*/}
                         {/*    <ul>*/}
                         {/*        <li>*/}
                         {/*            <Link to="/">Home</Link>*/}
                         {/*        </li>*/}
                         {/*        <li>*/}
                         {/*            <Link to="/about">About</Link>*/}
                         {/*        </li>*/}
                         {/*        <li>*/}
                         {/*            <Link to="/users">Users</Link>*/}
                         {/*        </li>*/}
                         {/*    </ul>*/}
                         {/*</nav>*/}

                         {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                         <Switch>
                             {/*<Route path="/">*/}
                             {/*    <Box/>*/}
                             {/*</Route>*/}
                             <Route path="/registration">
                                 {/*<Logo/>*/}

                                 <Box/>
                                 <Push/>
                                 {/*<Auth/>*/}
                             </Route>

                             {/*<Route path="/profile">*/}

                             {/*    <Profile />*/}
                             {/*</Route>*/}
                             <Route path="/login">
                                 <Box2/>
                                 {/*<Login/>*/}
                             </Route>

                             <Route path="/forgot">
                                 <Boxforgot/>
                             </Route>
                              <Route path="/profile">
                                  <Boxprofile/>
                              </Route>

                         </Switch>
                     </div>
                 </Router>

             </div>


        )
    }
}

export default App;
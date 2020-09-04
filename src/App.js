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
// import Editprofile from "./components/editprofile/editprofile";
import Boxeditprofile from "./components/boxeditprofile/boxeditprofile";
import Cropprofile from "./components/addphoto/cropprofile/cropprofile";
import GateKeeper from "./components/empty";
import Form from "../src/components/empty"
// import Sidebar from "./components/pushmenu/pushmenu'
import MapContainer from "./components/maps /maps";
import Nocoursepage from "./components/nocoursepage/nocoursepage";

class App extends React.Component {
    render() {
        return (
             <div>

                 <Router>
                     <div>

                         <Switch>

                             {/*<Route path="/registration">*/}
                             {/*    <Box/>*/}
                             {/*    <Push/>*/}
                             {/*</Route>*/}
                             <Route path="/login">
                                 <Box2/>
                                 <Push/>
                                 {/*<Login/>*/}
                             </Route>

                             <Route path="/forgot">
                                 <Boxforgot/>
                                 <Push/>
                             </Route>
                              <Route path="/profile">
                                  <Boxprofile/>
                                  <Push/>
                              </Route>
                             <Route path="/editprofile">
                                 <Boxeditprofile/>
                                 <Push/>
                             </Route>
                             <Route path="/addphoto">
                                 <Cropprofile/>
                                 <Push/>
                             </Route>
                             <Route path="/empty">
                                 <Form/>
                             </Route>
                             <Route path="">
                                 <Box/>
                                 <Push/>
                             </Route>
                             <Route path="/maps">
                                 <MapContainer/>
                             </Route>
                             <Route path="/no">
                                 <Nocoursepage/>
                                 <Push/>
                             </Route>


                         </Switch>
                     </div>
                 </Router>

             </div>


        )
    }
}

export default App;
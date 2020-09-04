import React from "react";
import { withRouter } from 'react-router-dom';
import axios from 'axios'
// import {HttpMethod} from "ionic";

class Profile extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         token: '',
    //     }
    // }


    componentDidMount() {
        axios.post(`https://api.iq.academy/api/account/profile`,
            {
                headers: {
                    'Authorization': 'Bearer 7vicuLuX24wTl21RaPcDzV4X6EKBdJp8',
                    // 'Content-Type': 'multipart/form-data'

                },

            body:
            this.formData,
            })
            .then(Data => {
                this.setState({


                })

            });
    }

    render() {
        // console.log(this.state.token);
        // this.props.history.push("/registration")
        return (
            <div>
                <h2>Profile11</h2>
                <div>{this.formData}</div>
            </div>
        );


    }
}
export default withRouter(Profile);
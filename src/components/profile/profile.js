import React from "react";
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {

    componentDidMount() {

        fetch("https://api.iq.academy/api/account/profile", {

            method: "POST",
            mode: 'cors',
            // mode: 'no-cors',
            headers:  new Headers({

                'Authorization': `Bearer 7NFQeH7LIJHNKZaVB02WihAcRmOOKvuA`,
                // "aaa":"bbb",
                // 'Content-Type': 'application/json'
                // 'Content-Type': 'multipart/form-data'
            }),

            body: this.formData,
        }).then((Data) => {
            console.log(this.formData);
        });

    }
    render() {
        // this.props.history.push("/registration")
        return (

            <h2>Profile</h2>
        );
    }
}

export default withRouter(Profile);
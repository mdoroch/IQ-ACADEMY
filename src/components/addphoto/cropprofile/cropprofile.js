import React, {Component} from 'react';
import classes from "./cropprofile.module.css";
import ImageCrop from './cropcrop';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Cropprofile extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userProfilePic: '',
            editor: null,
            scaleValue: 1,
        };
    }

    setEditorRef = editor => this.setState({ editor });

    onCrop = () => {
        const { editor } = this.state;
        if (editor !== null) {
            const url = editor.getImageScaledToCanvas().toDataURL();
            this.setState({ userProfilePic: url});
        }
    };

    onScaleChange = (scaleChangeEvent) => {
        const scaleValue =  parseFloat(scaleChangeEvent.target.value);
        this.setState({ scaleValue });
    };

    // DataURLtoFile = (dataurl, filename) => {
    //     let arr = dataurl.split(','),
    //         mime = arr[0].match(/:(.*?);/)[1],
    //         bstr = atob(arr[1]),
    //         n = bstr.length,
    //         u8arr = new Uint8Array(n);
    //     while (n--) {
    //         u8arr[n] = bstr.charCodeAt(n);
    //     }
    //     return new File([u8arr], filename, { type: mime });
    // };

    profilePicChange = (fileChangeEvent) => {
        const file = fileChangeEvent.target.files[0];
        const { type } = file;
        if (!(type.endsWith('jpeg') || type.endsWith('png') || type.endsWith('jpg') || type.endsWith('gif'))) {
        } else {
            this.setState({ openCropper: true, selectedImage: fileChangeEvent.target.files[0], fileUploadErrors: [] });
        }
    };
    render(){
        return (
            <div className={classes.Back}>
                <div className={classes.Input}>
                <input  type="file" name="profilePicBtn" accept="image/png, image/jpeg" onChange={this.profilePicChange} />
                <ImageCrop
                    imageSrc={this.state.selectedImage}
                    setEditorRef={this.setEditorRef}
                    onCrop={this.onCrop}
                    scaleValue={this.state.scaleValue}
                    onScaleChange={this.onScaleChange}
                />

                <img src={this.state.userProfilePic} alt="Profile" />
                </div>
                <nav>
                    <Link to="/login">
                <svg className={classes.Logout} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7917 19.5C16.4923 19.5 16.25 19.7423 16.25 20.0417V23.8334C16.25 24.4306 15.7639 24.9167 15.1667 24.9167H2.16668C1.5695 24.9167 1.08337 24.4306 1.08337 23.8334V2.16668C1.08337 1.5695 1.5695 1.08337 2.16668 1.08337H15.1667C15.7639 1.08337 16.25 1.5695 16.25 2.16668V5.95837C16.25 6.25777 16.4923 6.50005 16.7917 6.50005C17.0911 6.50005 17.3334 6.25777 17.3334 5.95837V2.16668C17.3333 0.971699 16.3616 0 15.1667 0H2.16668C0.971699 0 0 0.971699 0 2.16668V23.8334C0 25.0283 0.971699 26 2.16668 26H15.1667C16.3616 26 17.3334 25.0283 17.3334 23.8333V20.0416C17.3333 19.7423 17.0911 19.5 16.7917 19.5Z" fill="#E1D3C1"/>
                    <path d="M25.8244 12.6006L19.3244 6.64229C19.1027 6.44023 18.7616 6.45557 18.559 6.6756C18.3569 6.8962 18.3717 7.23897 18.5923 7.44103L24.066 12.4583H7.04168C6.74228 12.4583 6.5 12.7006 6.5 13C6.5 13.2994 6.74228 13.5417 7.04168 13.5417H24.066L18.5923 18.559C18.3717 18.761 18.357 19.1038 18.559 19.3244C18.6659 19.4408 18.8119 19.5 18.9584 19.5C19.0891 19.5 19.2202 19.4529 19.3244 19.3577L25.8244 13.3994C25.9365 13.2968 26 13.1518 26 13C26 12.8482 25.9365 12.7032 25.8244 12.6006Z" fill="#E1D3C1"/>
                </svg>
                    <div className={classes.Text}>Отменить</div>

                    </Link>
                </nav>

            </div>

        );
    }
}

export default Cropprofile;
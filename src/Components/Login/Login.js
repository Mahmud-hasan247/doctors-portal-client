import React from 'react';
import LoginDesign from './LoginDesign/LoginDesign';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { useHistory } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);



const Login = () => {

const provider = new firebase.auth.GoogleAuthProvider();

const history = useHistory();

const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            console.log(token);
            var user = result.user;
            console.log(user);
        })
        .catch(function (error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
}
    return (
        <div>
            <LoginDesign signIn={handleSignIn} key='key'></LoginDesign>
        </div>
    );
};

export default Login;
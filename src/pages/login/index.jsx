import './index.css';
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Dashboard from '../dashboard';


const firebaseConfig = {
    apiKey: "AIzaSyB9rnBcgX-4kNfUcwGBRm8-Q1DKq8fWP2s",
    authDomain: "smit-attendance-applicat-9c284.firebaseapp.com",
    projectId: "smit-attendance-applicat-9c284",
    storageBucket: "smit-attendance-applicat-9c284.appspot.com",
    messagingSenderId: "316454906819",
    appId: "1:316454906819:web:1acc31d0161948e6afab76"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);




function Login() {


    const [adminEmail, setAdminEmail] = useState("");
    const [adminPass, setAdminPass] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [messege, setMessege] = useState("");

    const checkAdmin = (e) => {

        e.preventDefault()
        console.log("fun running");

        const auth = getAuth();
        signInWithEmailAndPassword(auth, adminEmail, adminPass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setIsLogin(true);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const ErrorMessage00 = errorMessage.split('/')
                console.log("ErrorMessage ", ErrorMessage00[1].slice(0, -2));
                setMessege(ErrorMessage00[1].slice(0, -2))

            });


    }
    // console.log(isLogin);


    return (
        <div>
            {isLogin ? <Dashboard /> :
                <div className="login">

                    <div className="card">


                        <form onSubmit={checkAdmin}>
                            <h1>Admin Login</h1>
                            <input
                                type="text"
                                name=''
                                placeholder='Email address'
                                onChange={(e) => {
                                    setAdminEmail(e.target.value)
                                }}
                            />
                            <input
                                type="password"
                                placeholder='6 digit password'
                                onChange={(e) => {
                                    setAdminPass(e.target.value)
                                }}
                            />
                            <button type="submit" >Login</button>
                            <h3 id='errMessege' style={{ color: "red" }}>{messege}</h3>
                        </form>

                    </div>

                </div>

            }
        </div>
    )

}

export default Login
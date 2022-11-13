import './index.css';
import { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Dashboard from '../dashboard';
import { useFormik } from 'formik';
import * as yup from 'yup';


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


    const [isLogin, setIsLogin] = useState(false);
    const [authError, setAuthError] = useState('');


    const validationSchema = yup.object({
        loginEmail: yup
            .string("Enter email address")
            .email("Please enter valid address")
            .required("Login email is required"),
        LoginPassword: yup
            .string("Enter login password")
            .min(6, "Only 6 digit characters are allowed")
            .max(6, "Only 6 digit characters are allowed")
            .required("Login password is required"),
    });


    const formik = useFormik({
        initialValues: {
            loginEmail: "",
            LoginPassword: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log(values);

            const auth = getAuth();
            signInWithEmailAndPassword(auth, values.loginEmail, values.LoginPassword)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user);
                    setIsLogin(true);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const ErrorMessage00 = errorMessage.split('/')
                    setAuthError(ErrorMessage00[1].slice(0, -2))
                });

        }
    })


    return (
        <div>
            {isLogin ? <Dashboard /> :
                <div className="login">

                    <div className="card">

                        <h1>Admin Login</h1>
                        <form onSubmit={formik.handleSubmit}>

                            <div className="inputField">
                                <input
                                    type="text"
                                    name='loginEmail'
                                    placeholder='Email address'
                                    onChange={formik.handleChange}
                                    value={formik.values.loginEmail}
                                />
                                {
                                    (formik.touched.loginEmail && Boolean(formik.errors.loginEmail)
                                        || Boolean(authError === "user-not-found")
                                    ) ?
                                        <span>{formik.errors.loginEmail || authError}</span>
                                        :
                                        null
                                }
                            </div>

                            <div className="inputField">
                                <input
                                    type="password"
                                    placeholder='6 digit password'
                                    name='LoginPassword'
                                    onChange={formik.handleChange}
                                    value={formik.values.LoginPassword}
                                />
                                {
                                    (formik.touched.LoginPassword && Boolean(formik.errors.LoginPassword)
                                        || Boolean(authError === "wrong-password")
                                    ) ?
                                        <span>{formik.errors.LoginPassword || authError}</span>
                                        :
                                        null
                                }
                            </div>

                            <button type="submit" >Login</button>
                        </form>

                    </div>

                </div>

            }
        </div>
    )

}

export default Login
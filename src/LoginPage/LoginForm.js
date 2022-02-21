import { useState, useRef, useContext } from 'react';
import classes from './LoginForm.module.css';
import AuthContext from '../Store/Auth-context';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthHandler = () => {
        setIsLogin((preState) => !preState);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        emailInputRef.current.value = '';
        passwordInputRef.current.value = '';

        setIsLoading(true);
        let url;
        if(isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCc-5QNaJ4md_sKaCrvHgTAogYN6MQQdus';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCc-5QNaJ4md_sKaCrvHgTAogYN6MQQdus';
        } 

        axios.post(url, {
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true,
                    headers: {'Content-Type': 'application/json'}
        }).then( res => {
            setIsLoading(false);
            if(res.status === 200) {
                return res;
            } else {
                return res.then(data => {
                    let errorMessage;
                    if(data && data.error && data.error.message) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            authCtx.login(data.idToken);
            navigate('/home');
        }).catch((err) => {
            alert(err.message);
        });
    };

    return (
        <section className={classes.auth}>
            <h2>{isLogin ? 'LogIn' : 'SignUp'}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required ref={emailInputRef} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required ref={passwordInputRef} />
                </div>
                <div className={classes.but}>
                    {!isLoading && <button>{isLogin ? 'LogIn' : 'SignUp'}</button>}
                    {isLoading && <p>Sending Request...</p>}
                    <button
                        type="button"
                        onClick={switchAuthHandler}
                    >
                    {isLogin ? 'Create new account' :  'Login with existing account'}   
                    </button>
                </div>
            </form>
        </section>
    );
};

export default LoginForm;
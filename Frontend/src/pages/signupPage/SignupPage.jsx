import { useState } from 'react'
import { useNavigate, Link } from "react-router-dom";
import './SignupPage.css'
import logo from '../../assests/images/logo.png'
import android from '../../assests/images/appstore.png'
import apple from '../../assests/images/apple_appstore.png'
import axios from '../../services/axios.js'

const LoginPage = () => {
    const navigate = useNavigate()

    const [fullName, setFullName] = useState()
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const postUserData = () => {
        console.log(fullName + "\n" + userName + "\n" + email + "\n" + password)
        axios.post('/signup', {
            fullName,
            userName,
            email,
            password
        })
        .then(data => {
            navigate('/login')
        })        
        .catch(error => {
            console.log(error.response.data.message);
        });
    }

    return (
        <div className="signup_form_container">
            <div className="signup_box">
                <img className="insta_logo" src={logo} alt="logoHere" />
                <div className="sign_text">Sign up to see photos and videos from your friends.</div>
                <div className="signup_facebook">Log in with Facebook</div>
                <div className="sperator">
                        <div>OR</div>
                </div>
                <div className="signup_info">
                    <div className="input_fullname"><input type="text" placeholder="Fullname" onChange={e => setFullName(e.target.value)}/></div>
                    <div className="input_username"><input type="text" placeholder="Username" onChange={e => setUserName(e.target.value)}/></div>
                    <div className="input_email"><input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} /></div>
                    <div className="input_pass"><input type="password" placeholder="Passsword" onChange={e => setPassword(e.target.value)} /></div>
                    <button className="signup_button" onClick={() => postUserData()}>Sign up</button>
                </div>
            </div>
            <div className="signup_link">
                <span>Have an account? </span><span><Link to="/login">Log in</Link></span>
            </div>
            <div className="app_link">
                <div>Get the app.</div>
                <div className="app__links">
                    <img src={apple} alt="" />
                    <img src={android} alt="" />
                </div>
            </div>
        </div>

    )
}

export default LoginPage
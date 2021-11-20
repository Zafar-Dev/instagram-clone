import { useNavigate, Link } from 'react-router-dom'
import './LoginForm.css'
import logo from '../../assests/images/logo.png'
import android from '../../assests/images/appstore.png'
import apple from '../../assests/images/apple_appstore.png'
import { useState } from 'react'
import axios from '../../services/axios'

const LoginForm = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const postLoginData = () => {
        axios.post('/signin', {
            email,
            password
        })
        .then(data => {
            console.log(data)
            localStorage.setItem("jwt" , data.data.token)
            localStorage.setItem("user" , JSON.stringify(data.data.user))
            navigate('/')
        })
        .catch(error => {
            console.log(error.response.data.message);
        });
    }
    return (
        <div className="login_form_container">
            <div className="login_box">
                <img className="insta_logo" src={logo} alt="logoHere" />
                <div className="login_info">
                    <div className="input_email"><input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} /></div>
                    <div className="input_pass"><input type="password" placeholder="Passsword" onChange={e => setPassword(e.target.value)} /></div>
                    <button className="login_button" onClick={() => postLoginData()}>Log In</button>
                    <div className="sperator">
                        <div>OR</div>
                    </div>
                    <div className="login_facebook">Log in with Facebook</div>
                    <div className="forget_pass">Forget password?</div>
                </div>
            </div>
            <div className="signup_link">
                <span>Don't have an account? </span><span><Link to="/signup">Sign up</Link></span>
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

export default LoginForm

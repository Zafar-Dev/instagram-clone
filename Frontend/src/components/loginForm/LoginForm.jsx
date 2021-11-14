import './LoginForm.css'
import logo from '../../assests/images/logo.png'
import android from '../../assests/images/appstore.png'
import apple from '../../assests/images/apple_appstore.png'
const LoginForm = () => {
    return (
        <div className="login_form_container">
            <div className="login_box">
                <img className="insta_logo" src={logo} alt="logoHere" />
                <div className="login_info">
                    <div className="input_email"><input type="text" placeholder="Email" /></div>
                    <div className="input_pass"><input type="password" placeholder="Passsword" /></div>
                    <button className="login_button">Log In</button>
                    <div className="sperator">
                        {/* <div></div><div>OR</div><div></div> */}
                        <div>OR</div>
                    </div>
                    <div className="login_facebook">Log in with Facebook</div>
                    <div className="forget_pass">Forget password?</div>
                </div>
            </div>
            <div className="signup_link">
                <span>Don't have an account? </span><span>Sign up</span>
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

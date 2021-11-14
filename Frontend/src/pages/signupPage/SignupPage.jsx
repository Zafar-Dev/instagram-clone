import './SignupPage.css'
import logo from '../../assests/images/logo.png'
import android from '../../assests/images/appstore.png'
import apple from '../../assests/images/apple_appstore.png'
const LoginPage = () => {

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
                    <div className="input_fullname"><input type="text" placeholder="Fullname" /></div>
                    <div className="input_username"><input type="text" placeholder="Username" /></div>
                    <div className="input_email"><input type="text" placeholder="Email" /></div>
                    <div className="input_pass"><input type="password" placeholder="Passsword" /></div>
                    <button className="signup_button">Sign up</button>
                </div>
            </div>
            <div className="signup_link">
                <span>Have an account? </span><span>Log in</span>
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
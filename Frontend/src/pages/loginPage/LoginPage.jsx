import './LoginPage.css'
import instaImg from '../../assests/images/insta.png'
import LoginForm from '../../components/loginForm/LoginForm'

const LoginPage = () => {

    return (
        <div className="login_container">
            <div className="insta_feed_img">
                <div>
                    <img src={instaImg} alt="" />
                </div>
            </div>
            <LoginForm />
        </div>
    )
}

export default LoginPage
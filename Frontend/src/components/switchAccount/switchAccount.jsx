import './switchAccount.css'
import imgProfile from '../../assests/images/profile_image.jpg'
const SwitchAcount = () => {

    return (
        <div className='switch_account_container'>
            <div className='profile_info'>
                <div className='profile_img'>
                    <img src={imgProfile} alt="" />
                </div>
                <div className='profile_name_container'>
                    <p className="profile_username">ig.zafar_khan</p>
                    <p className='profile_fullname'>Zafar Ullah</p>
                </div>
            </div>
            <div className="switch_button">Switch</div>
        </div>
    )
}

export default SwitchAcount
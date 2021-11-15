import './Profile.css'
import profileImage from '../../assests/images/profile_image.jpg'
import Navbar from '../../components/navbar/Navbar'
const Profile = () => {
    return (
        <div>
        <Navbar />
        <div className="profile_container container__width layout">
            <div className="profile_image">
                <img src={profileImage} alt="" />
            </div>
            <div className="profile_details">
                <div className="profile_option">
                    <h2>ig_zafar_khan</h2>
                    <div className="profile_edit_btn">Edit Profile</div>
                    <div className="profile_option_btn">
                        <svg aria-label="Options" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z" fill-rule="evenodd"></path></svg>
                    </div>
                </div>
                <div className="profile_edit_btn_mobile">Edit Profile</div>
                <div className="profile_post_info">
                    <div className="profile_no_posts">
                        <span>0</span> <span> posts</span>
                    </div>
                    <div className="profile_no_follower">
                        <span>0</span> <span> followers</span>
                    </div>
                    <div className="profile_no_following">
                        <span>0</span> <span> following</span>
                    </div>
                </div>
                <div className="profile_person_fullname">Zafar Khan</div>
            </div>
        </div>        
        <div className="profile_person_fullname_mobile">Zafar Khan</div>

        <div className="sperator_box"></div>

        <div className="profile_post_images">
            <img src="https://cdn.pixabay.com/photo/2021/11/10/19/19/mushrooms-6784664_640.jpg" alt="pics" />
            <img src="https://cdn.pixabay.com/photo/2021/10/18/19/19/bird-6721895_960_720.jpg" alt="" />
            <img src="https://cdn.pixabay.com/photo/2021/08/26/01/40/cats-6574788_960_720.jpg" alt="" />
            <img src="https://cdn.pixabay.com/photo/2021/10/26/16/47/man-6744539_960_720.jpg" alt="" />
            <img src="https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214__340.jpg" alt="" />
            <img src="https://cdn.pixabay.com/photo/2021/08/18/22/42/australian-shepherd-6556697__340.jpg" alt="" />
            <img src="https://cdn.pixabay.com/photo/2021/11/11/11/21/mountains-6786061_960_720.jpg" alt="" />
        </div>
        </div>
    )
}

export default Profile
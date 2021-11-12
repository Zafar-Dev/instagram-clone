import Navbar from "../../components/navbar/Navbar"
import Post from "../../components/post/Post"
import Suggest from "../../components/suggest/Sugges"
import SwitchAcount from "../../components/switchAccount/switchAccount"
import "./Homepage.css"
const Homepage = () => {
    return (
        <>
            <Navbar />
            <section className='container__width layout'>
                <div className='section_container'>
                    <div className='left_container'>
                        <Post />
                    </div>
                    <div className='right_container'>
                        <div className='fixed_section'>
                            <SwitchAcount />
                            <Suggest />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Homepage